import { useState } from "react";
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
import { sortData } from "../../utils/sortPokemonData";
import { IPokemonData } from "../../types/pokemonTypes";
import CardView from "../../features/cardView/PokemonCardView/PokemonCardView";
import { CSSProperties } from "styled-components";

interface MainPageProps {
  pokemonData: IPokemonData[];
  headerText: string;
  style?: CSSProperties;
}

const MainPage = ({ pokemonData, headerText, style }: MainPageProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabsOptions[0].label);
  const [sortBy, setSortBy] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(pokemonData);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    let data = pokemonData;

    if (value) {
      data = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredData(data);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setFilteredData(pokemonData);
  };

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const handleSortChange = (event: SelectChangeEvent<unknown>) => {
    setSortBy(event.target.value as string);
    setFilteredData(sortData(filteredData, event.target.value as string));
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
      {selectedTab === "List" ? (
        <Table columnTitles={pokemonTableColumnLabels} data={filteredData} />
      ) : (
        <CardView data={filteredData} />
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
