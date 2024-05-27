import { useState } from "react";
import Tab from "../Tab/Tab";
import { StyledTabs } from "./styles";
import { CSSProperties } from "styled-components";

interface TabOptions {
  label: string;
  img?: string;
  style?: CSSProperties;
}

interface TabsProps {
  tabs: TabOptions[];
  style?: CSSProperties;
}

const Tabs = ({ tabs, style }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  const handleClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <>
      <StyledTabs style={style}>
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            {...tab}
            active={tab.label === activeTab}
            onClick={handleClick}
          />
        ))}
      </StyledTabs>
      <p>Active tab: {activeTab}</p>
    </>
  );
};

export default Tabs;
