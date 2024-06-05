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
import { HeadingLargeMedium } from "../../styles/typography";
import { SelectChangeEvent } from "@mui/material";

import { pokemonTableColumnLabels } from "../../constants/table";
import { tableSortByOptions } from "../../constants/tableSortbyOptions";
import { tabsOptions } from "../../constants/tabs";
import CardView from "../../features/cardView/PokemonCardView/PokemonCardView";
import { CSSProperties } from "styled-components";

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
  const [sortBy, setSortBy] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");

  const {
    data: pokemonData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemons", { isOwnedFlag, searchValue, sortBy }],
    queryFn: () => fetchPokemons({ isOwned: isOwnedFlag, searchValue, sortBy }),
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const handleSortChange = (event: SelectChangeEvent<unknown>) => {
    setSortBy(event.target.value as string);
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
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data</p>
      ) : selectedTab === "List" ? (
        <Table columnTitles={pokemonTableColumnLabels} data={pokemonData} />
      ) : (
        <CardView data={pokemonData} />
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
