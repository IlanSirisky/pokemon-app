import { useState } from "react";
import { BodyRegular, BodyBold } from "../../styles/typography";
import { StyledTab } from "./styles";
import { CSSProperties } from "styled-components";

interface TabProps {
  text: string;
  img?: string;
  active?: boolean;
  onClick?: (active: boolean) => void;
  style?: CSSProperties;
}

const Tab = ({
  text = "list",
  active = false,
  onClick,
  img,
  style,
}: TabProps) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive((prev) => !prev);
    onClick?.(!isActive);
  };

  return (
    <StyledTab $isActive={isActive} onClick={handleClick} style={style}>
      {img && <img src={img} alt={`${text} icon`} />}
      {isActive ? (
        <BodyBold>{text}</BodyBold>
      ) : (
        <BodyRegular>{text}</BodyRegular>
      )}
    </StyledTab>
  );
};

export default Tab;
