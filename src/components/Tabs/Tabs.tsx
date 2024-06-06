import Tab from "../Tab/Tab";
import { StyledTabs } from "./styles";
import { CSSProperties } from "styled-components";

export interface TabOptions {
  label: string;
  img?: string;
  style?: CSSProperties;
}

interface TabsProps {
  tabs: TabOptions[];
  activeTab: string;
  onTabChange: (label: string) => void;
  style?: CSSProperties;
}

const Tabs = ({ tabs, activeTab, onTabChange, style }: TabsProps) => {
  return (
    <>
      <StyledTabs style={style}>
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            {...tab}
            active={tab.label === activeTab}
            onClick={onTabChange}
          />
        ))}
      </StyledTabs>
    </>
  );
};

export default Tabs;
