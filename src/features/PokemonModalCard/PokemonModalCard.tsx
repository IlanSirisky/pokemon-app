import { CSSProperties } from "styled-components";
import {
  PokemonModalCardContainer,
  StyledHeaderContent,
  StyledImage,
  AttributesContainer,
  ModalCardContentContainer,
  Attribute,
  CardContentWrapper,
  ModalCardTextStyles,
  ImageWrapper,
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
  attributes: IPokemonAttribute[];
  style?: CSSProperties;
}

const PokemonModalCard = ({
  title,
  subheadText,
  image,
  description,
  attributes,
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
            {attributes.map((attr) => (
              <Attribute key={attr.label}>
                <BodyRegular style={ModalCardTextStyles.attributeLabel}>
                  {attr.label}
                </BodyRegular>
                {attr.value.split(',').map((val, index) => (
                  <HeadingMediumRegular
                    key={index}
                    style={ModalCardTextStyles.attributeValue}
                  >
                    {val.trim()}
                  </HeadingMediumRegular>
                ))}
              </Attribute>
            ))}
          </AttributesContainer>
        </ModalCardContentContainer>
      </CardContentWrapper>
    </PokemonModalCardContainer>
  );
};

export default PokemonModalCard;
