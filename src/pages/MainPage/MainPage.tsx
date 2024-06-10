import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../../hooks/useFetchPokemonData";
import InputField from "../../components/InpuField/InputField";
import Table from "../../components/Table/Table";
import Tabs from "../../components/Tabs/Tabs";
import Select from "../../components/Select/Select";

import {
  InputFieldWrapper,
  InputToolsWrapper,
  MainPageWrapper,
} from "./styles";
import { HeadingLargeBold, HeadingLargeMedium } from "../../styles/typography";
import { SelectChangeEvent } from "@mui/material";
import { pokemonTableColumnLabels } from "../../constants/table";
import {
  SortByValues,
  tableSortByOptions,
} from "../../constants/tableSortbyOptions";
import { tabsOptions } from "../../constants/tabs";
import CardView from "../../features/cardView/PokemonCardView/PokemonCardView";
import { CSSProperties } from "styled-components";
import useDebouncedValue from "../../hooks/useDebouncedValue";
// import SkeletonTable from "../../components/Table/skeletonTable";
// import SkeletonCardView from "../../features/cardView/PokemonCardView/SkeletonCardView";

interface MainPageProps {
  headerText: string;
  isOwnedFlag?: boolean;
  style?: CSSProperties;
}

const MainPage = ({
  isOwnedFlag = false,
  headerText,
  style,
}: MainPageProps) => {
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

  return (
    <MainPageWrapper style={style}>
      <HeadingLargeMedium>{headerText}</HeadingLargeMedium>
      <InputToolsWrapper>
        <InputFieldWrapper>
          <InputField
            placeholder="Search Pokemon"
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
        />
      </InputToolsWrapper>
      {error ? (
        <HeadingLargeBold>Error loading data</HeadingLargeBold>
      ) : isLoading ? (
        // selectedTab === "List" ? (
        //   <SkeletonTable />
        // ) : (
        //   <SkeletonCardView itemsPerPage={itemsPerPage}/>
        // )
        <HeadingLargeBold>Loading data...</HeadingLargeBold>
      ) : selectedTab === "List" ? (
        pokemonData && (
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
        )
      ) : (
        pokemonData && (
          <CardView
            data={pokemonData.pokemons}
            totalCount={pokemonData.totalCount}
            rowsPerPage={itemsPerPage}
            page={page}
            onPageChange={handleCardViewPageChange}
          />
        )
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
