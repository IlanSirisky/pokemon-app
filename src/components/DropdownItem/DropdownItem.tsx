import { StyledDropdownItem, TextContainer } from "./styles";
import { BodyRegular, XSmallRegular } from "../../styles/typography";
import Avatar from "../Avatar/Avatar";

interface DropdownItemProps {
  avatar?: string;
  text: string;
  power?: number;
  avatarSize?: number;
  onClick?: () => void;
}

const DropdownItem = ({
  avatar,
  text,
  power,
  avatarSize = 25,
  onClick,
}: DropdownItemProps) => {
  return (
    <StyledDropdownItem onClick={onClick}>
      <TextContainer>
        {avatar && <Avatar image={avatar} alt={text} size={avatarSize} />}
        <BodyRegular>{text}</BodyRegular>
      </TextContainer>
      {avatar && power && <XSmallRegular>{power}px</XSmallRegular>}
    </StyledDropdownItem>
  );
};

export default DropdownItem;
