import InputField from "../../components/InpuField/InputField";
import Table from "../../components/Table/Table";
import Tabs from "../../components/Tabs/Tabs";
import { pokemonTableColumnLabels } from "../../constants/table";
import pokemonsMockData from "../../data/pokemonMockData";
import { tabsOptions } from "../../constants/tabs";
import {
  InputFieldWrapper,
  InputToolsWrapper,
  MainPageWrapper,
} from "./styles";
import { HeadingLargeMedium } from "../../styles/typography";
import Select from "../../components/Select/Select";
import { tableSortByOptions } from "../../constants/tableSortbyOptions";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <HeadingLargeMedium>All Pokemons</HeadingLargeMedium>
      <InputToolsWrapper>
        <InputFieldWrapper>
          <InputField
            placeholder="Search Pokemon"
            onChange={() => {}}
            onSubmit={() => {}}
            value=""
          />
          <Tabs tabs={tabsOptions} />
        </InputFieldWrapper>
        <Select options={tableSortByOptions} placeholder="Sort By" />
      </InputToolsWrapper>
      <Table columnTitles={pokemonTableColumnLabels} data={pokemonsMockData} />
    </MainPageWrapper>
  );
};

export default MainPage;
