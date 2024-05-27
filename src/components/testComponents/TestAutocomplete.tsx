import { pokemonOptions } from "../../constants/autocomplete";
import { HeadingXLargeMedium } from "../../styles/typography";
import Autocomplete from "../Autocomplete/Autocomplete";

const TestAutocomplete = () => {
  return (
    <div
      style={{
        border: `1px solid black`,
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }}>
      <HeadingXLargeMedium>Autocomplete Component</HeadingXLargeMedium>
      <Autocomplete options={pokemonOptions} placeholder="Search Pokemon" />
    </div>
  );
};

export default TestAutocomplete;