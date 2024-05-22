import { StyledDropdownItem, TextContainer } from "./styles";
import { BodyRegular, XSmallRegular } from "../../styles/typography";
import Avatar from "../Avatar/Avatar";
import { avatarSizes } from "../../styles/stylingValues";
import { CSSProperties } from "styled-components";

interface DropdownItemProps {
  text: string;
  avatar?: string;
  endText?: string;
  avatarSize?: number;
  onClick?: () => void;
  style?: CSSProperties;
}

const DropdownItem = ({
  text,
  avatar,
  endText,
  avatarSize = avatarSizes.small,
  onClick,
  style,
}: DropdownItemProps) => {
  return (
    <StyledDropdownItem onClick={onClick} style={style}>
      <TextContainer>
        {avatar && <Avatar image={avatar} alt={text} size={avatarSize} />}
        <BodyRegular>{text}</BodyRegular>
      </TextContainer>
      {endText && <XSmallRegular>{endText}</XSmallRegular>}
    </StyledDropdownItem>
  );
};

export default DropdownItem;
