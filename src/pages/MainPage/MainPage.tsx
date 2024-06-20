import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPokemonTypesCount,
  fetchPokemons,
} from "../../hooks/useFetchPokemonData";
import InputField from "../../components/InpuField/InputField";
import Table from "../../components/Table/Table";
import Tabs from "../../components/Tabs/Tabs";
import Select from "../../components/Select/Select";

import {
  InputFieldWrapper,
  InputToolsWrapper,
  MainPageWrapper,
  SkeletonStyle,
  TablePieChartStyles,
} from "./styles";
import { HeadingLargeBold, HeadingLargeMedium } from "../../styles/typography";
import { SelectChangeEvent, Skeleton } from "@mui/material";
import { pokemonTableColumnLabels } from "../../constants/table";
import {
  SortByValues,
  tableSortByOptions,
} from "../../constants/tableSortbyOptions";
import { tabsOptions } from "../../constants/tabs";
import CardView from "../../features/cardView/PokemonCardView/PokemonCardView";
import { CSSProperties } from "styled-components";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import SkeletonCardView from "../../features/cardView/PokemonCardView/SkeletonCardView";
import arrowIcon from "../../assets/icons/ArrowIcon.svg";
import PokemonTypesPieChart from "../../features/PokemonPieChart/PokemonTypesPieChart";

interface MainPageProps {
  headerText: string;
  isOwnedFlag?: boolean;
  style?: CSSProperties;
}

const MainPage = ({ isOwnedFlag, headerText, style }: MainPageProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabsOptions[0].label);
  const [sortBy, setSortBy] = useState<SortByValues | "">("");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const debouncedSearchValue = useDebouncedValue(searchValue, 500);

  const {
    data: pokemonData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "pokemons",
      {
        isOwnedFlag,
        searchValue: debouncedSearchValue,
        sortBy: sortBy || SortByValues.ID,
        page,
        limit: itemsPerPage,
      },
    ],
    queryFn: () =>
      fetchPokemons({
        isOwned: isOwnedFlag,
        searchValue: debouncedSearchValue,
        sortBy: sortBy || SortByValues.ID,
        page,
        limit: itemsPerPage,
      }),
  });

  const {
    data: pokemonTypesCount,
    // isLoading: isLoadingTypesCount,
    // error: errorTypesCount,
  } = useQuery({
    queryKey: ["pokemonTypesCount"],
    queryFn: fetchPokemonTypesCount,
    enabled: isOwnedFlag === true,
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setPage(1);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setPage(1);
  };

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const handleSortChange = (event: SelectChangeEvent<unknown>) => {
    setSortBy(event.target.value as SortByValues);
    setPage(1);
  };

  const handleTablePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage + 1);
  };

  const handleCardViewPageChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeItemsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const renderError = () => (
    <HeadingLargeBold>Error loading data</HeadingLargeBold>
  );

  const renderLoading = (selectedTab: string, itemsPerPage: number) => {
    if (selectedTab === "List") {
      return (
        <Skeleton
          variant="rectangular"
          height={600}
          width={isOwnedFlag ? "70%" : "100%"}
          sx={SkeletonStyle}
        />
      );
    } else {
      return <SkeletonCardView itemsPerPage={itemsPerPage} />;
    }
  };

  let renderedContent;

  if (error) {
    renderedContent = renderError();
  }

  if (isLoading) {
    renderedContent = renderLoading(selectedTab, itemsPerPage);
  }

  if (pokemonData) {
    if (selectedTab === "List") {
      renderedContent = (
        <div style={TablePieChartStyles}>
          <div style={{ width: isOwnedFlag ? "70%" : "100%" }}>
            <Table
              columnTitles={pokemonTableColumnLabels}
              data={pokemonData.pokemons}
              rowPerPageOptions={[5, 10, 20]}
              rowsPerPage={itemsPerPage}
              page={page - 1}
              count={pokemonData.totalCount}
              onPageChange={handleTablePageChange}
              onRowsPerPageChange={handleChangeItemsPerPage}
            />
          </div>
          {isOwnedFlag && pokemonTypesCount && (
            <PokemonTypesPieChart data={pokemonTypesCount} />
          )}
        </div>
      );
    } else {
      renderedContent = (
        <CardView
          data={pokemonData.pokemons}
          totalCount={pokemonData.totalCount}
          rowsPerPage={itemsPerPage}
          page={page}
          onPageChange={handleCardViewPageChange}
        />
      );
    }
  }
  
  return (
    <MainPageWrapper style={style}>
      <HeadingLargeMedium>{headerText}</HeadingLargeMedium>
      <InputToolsWrapper $tab={selectedTab} $myPokemons={isOwnedFlag || false}>
        <InputFieldWrapper $tab={selectedTab} $myPokemons={isOwnedFlag || false}>
          <InputField
            placeholder="Search Pokemon Name"
            onChange={handleSearchChange}
            onEndIconClick={handleClearSearch}
            value={searchValue}
          />
          <Tabs
            tabs={tabsOptions}
            activeTab={selectedTab}
            onTabChange={handleTabChange}
          />
        </InputFieldWrapper>
        <Select
          options={tableSortByOptions}
          placeholder="Sort By"
          selectedOption={sortBy}
          setSelectedOption={handleSortChange}
          arrowIcon={arrowIcon}
        />
      </InputToolsWrapper>
      {renderedContent}
    </MainPageWrapper>
  );
};

export default MainPage;
