import { useEffect, useState } from "react";
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

interface MainPageProps {
  pokemonData: IPokemonData[];
  headerText: string;
}

const MainPage = ({ pokemonData, headerText }: MainPageProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabsOptions[0].label);
  const [sortBy, setSortBy] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(pokemonData);

  useEffect(() => {
    let data = pokemonData;

    if (searchValue) {
      data = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilteredData(data);
  }, [pokemonData, searchValue]);

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
    setFilteredData(sortData(filteredData, event.target.value as string));
  };

  return (
    <MainPageWrapper>
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
        <div>Cards View</div>
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
