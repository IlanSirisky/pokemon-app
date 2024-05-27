import Tabs from "../Tabs/Tabs";
import { tabsOptions } from "../../constants/tabs";

const TestTabs = () => {
  return (
    <div
      style={{
        border: `1px solid black`,
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}>
      <Tabs tabs={tabsOptions} />
    </div>
  );
};

export default TestTabs;
