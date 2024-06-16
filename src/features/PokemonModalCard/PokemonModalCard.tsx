import { CSSProperties } from "styled-components";
import {
  PokemonModalCardContainer,
  StyledHeaderContent,
  StyledImage,
  AttributesContainer,
  ModalCardContentContainer,
  CardContentWrapper,
  ModalCardTextStyles,
  ImageWrapper,
  ProfileAttribute,
  StatAttribute,
} from "./styles";
import {
  BodyRegular,
  HeadingLargeRegular,
  HeadingMediumRegular,
  SubheadingRegular,
} from "../../styles/typography";
import { IPokemonAttribute } from "./types";

interface PokemonModalCardProps {
  title: string;
  subheadText: string;
  image: string;
  description: string;
  profileAttributes?: IPokemonAttribute[];
  statsAttributes?: IPokemonAttribute[];
  style?: CSSProperties;
}

const PokemonModalCard = ({
  title,
  subheadText,
  image,
  description,
  profileAttributes,
  statsAttributes,
  style,
}: PokemonModalCardProps) => {
  return (
    <PokemonModalCardContainer style={style}>
      <StyledHeaderContent>
        <SubheadingRegular style={ModalCardTextStyles.subHeadText}>
          {subheadText}
        </SubheadingRegular>
        <HeadingLargeRegular style={ModalCardTextStyles.cardTitle}>
          {title}
        </HeadingLargeRegular>
      </StyledHeaderContent>
      <CardContentWrapper>
        <ImageWrapper>
          <StyledImage src={image} alt={title} />
        </ImageWrapper>
        <ModalCardContentContainer>
          <HeadingMediumRegular style={ModalCardTextStyles.description}>
            {description}
          </HeadingMediumRegular>
          <hr style={ModalCardTextStyles.hr} />
          <AttributesContainer>
            {statsAttributes?.map((attr) => (
              <StatAttribute key={attr.label}>
                <BodyRegular style={ModalCardTextStyles.attributeLabel}>
                  {attr.label}:
                </BodyRegular>
                <HeadingMediumRegular
                  style={ModalCardTextStyles.attributeValue}>
                  {attr.value}
                </HeadingMediumRegular>
              </StatAttribute>
            ))}
          </AttributesContainer>
          <hr style={ModalCardTextStyles.hr} />
          <AttributesContainer>
            {profileAttributes?.map((attr) => (
              <ProfileAttribute key={attr.label}>
                <BodyRegular style={ModalCardTextStyles.attributeLabel}>
                  {attr.label}
                </BodyRegular>
                {attr.value.split(",").map((val, index) => (
                  <HeadingMediumRegular
                    key={index}
                    style={ModalCardTextStyles.attributeValue}>
                    {val.trim()}
                  </HeadingMediumRegular>
                ))}
              </ProfileAttribute>
            ))}
          </AttributesContainer>
        </ModalCardContentContainer>
      </CardContentWrapper>
    </PokemonModalCardContainer>
  );
};

export default PokemonModalCard;
