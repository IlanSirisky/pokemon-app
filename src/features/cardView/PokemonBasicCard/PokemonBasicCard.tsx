import { StyledBasicCard } from "./styles";
import { CSSProperties } from "styled-components";
import CardBody from "../../../components/CardBody/CardBody";

interface BasicCardProps {
  cardTitle: string;
  image: string;
  subheadText?: string;
  cornerText?: string;
  topCornerIcon?: string;
  style?: CSSProperties;
}

const PokemonBasicCard = ({
  cardTitle,
  image,
  subheadText,
  cornerText,
  topCornerIcon,
  style,
}: BasicCardProps) => {
  return (
    <StyledBasicCard style={style}>
      <CardBody
        cardTitle={cardTitle}
        image={image}
        subheadText={subheadText}
        cornerText={cornerText}
        topCornerIcon={topCornerIcon}
      />
    </StyledBasicCard>
  );
};

export default PokemonBasicCard;
