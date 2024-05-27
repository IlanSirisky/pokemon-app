import { tableSortByOptions } from "../../constants/tableSortbyOptions";
import { HeadingXLargeMedium } from "../../styles/typography";
import Select from "../Select/Select";

const TestSelect = () => {
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
      <HeadingXLargeMedium>Select Component</HeadingXLargeMedium>
      <Select options={tableSortByOptions} placeholder="Sort by" />
    </div>
  );
};

export default TestSelect;
