import { useState } from "react";
import { BodyRegular, BodyBold } from "../../styles/typography";
import { StyledTab } from "./styles";

interface TabProps {
  text: string;
  img?: string;
  active?: boolean;
  onClick?: (active: boolean) => void;
}

const Tab = ({ text = "list", active = false, onClick, img }: TabProps) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick(!isActive);
  };

  return (
    <StyledTab $isActive={isActive} onClick={handleClick}>
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
