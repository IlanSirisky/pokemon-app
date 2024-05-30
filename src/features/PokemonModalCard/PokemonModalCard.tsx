import { CSSProperties } from "styled-components";
import {
  PokemonModalCardContainer,
  StyledHeaderContent,
  StyledImage,
  AttributesContainer,
  ModalCardContentContainer,
  Attribute,
  CardContentWrapper,
  HeaderContainer,
  ModalCardTextStyles,
} from "./styles";
import {
  BodyRegular,
  HeadingLargeRegular,
  HeadingMediumRegular,
  SubheadingRegular,
} from "../../styles/typography";

interface PokemonModalCardProps {
  title: string;
  subheadText: string;
  image: string;
  description: string;
  attributes: { label: string; value: string }[];
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
      <HeaderContainer>
        <StyledHeaderContent>
          <SubheadingRegular style={ModalCardTextStyles.subHeadText}>
            {subheadText}
          </SubheadingRegular>
          <HeadingLargeRegular style={ModalCardTextStyles.cardTitle}>
            {title}
          </HeadingLargeRegular>
        </StyledHeaderContent>
      </HeaderContainer>
      <CardContentWrapper>
        <StyledImage src={image} alt={title} />
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
                <HeadingMediumRegular
                  style={ModalCardTextStyles.attributeValue}>
                  {attr.value}
                </HeadingMediumRegular>
              </Attribute>
            ))}
          </AttributesContainer>
        </ModalCardContentContainer>
      </CardContentWrapper>
    </PokemonModalCardContainer>
  );
};

export default PokemonModalCard;
