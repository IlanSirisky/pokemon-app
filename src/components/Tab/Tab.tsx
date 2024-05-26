import { BodyRegular, BodyBold } from "../../styles/typography";
import { StyledTab } from "./styles";
import { CSSProperties } from "styled-components";

export interface TabProps {
  label: string;
  onClick: (label: string) => void;
  active: boolean;
  img?: string;
  style?: CSSProperties;
}

const Tab = ({ label, active, onClick, img, style }: TabProps) => {
  return (
    <StyledTab $isActive={active} onClick={() => onClick(label)} style={style}>
      {img && <img src={img} alt={`${label} icon`} />}
      {active ? (
        <BodyBold>{label}</BodyBold>
      ) : (
        <BodyRegular>{label}</BodyRegular>
      )}
    </StyledTab>
  );
};

export default Tab;
