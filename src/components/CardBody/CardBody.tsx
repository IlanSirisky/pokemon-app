import {
  PowerContainer,
  StyledIdText,
  StyledPokemonImage,
  ImagePowerContainer,
  StyledHeaderWrapper,
} from "./styles";
import { HeadingLargeRegular, XSmallRegular } from "../../styles/typography";
import { CSSProperties } from "styled-components";
import { avatarSizes } from "../../styles/stylingValues";
import Avatar from "../Avatar/Avatar";

interface CardBodyProps {
  cardTitle: string;
  image: string;
  subheadText?: string;
  cornerText?: string;
  topCornerIcon?: string;
  iconFlag?: boolean;
  bottomIcon?: string;
  style?: CSSProperties;
}

const CardBody = ({
  cardTitle,
  image,
  subheadText,
  cornerText,
  topCornerIcon,
  iconFlag,
  bottomIcon,
  style,
}: CardBodyProps) => {
  return (
    <>
      <ImagePowerContainer style={style}>
        <StyledPokemonImage src={image} alt={cardTitle} />
        <PowerContainer>
          {cornerText && <XSmallRegular>{cornerText}</XSmallRegular>}
          {topCornerIcon && <img src={topCornerIcon} alt={cardTitle} />}
        </PowerContainer>
      </ImagePowerContainer>
      {subheadText && <StyledIdText>{subheadText}</StyledIdText>}
      <StyledHeaderWrapper>
        <HeadingLargeRegular>{cardTitle}</HeadingLargeRegular>
        {iconFlag && bottomIcon && (
          <Avatar image={bottomIcon} alt="pokeball" size={avatarSizes.small} />
        )}
      </StyledHeaderWrapper>
    </>
  );
};

export default CardBody;
