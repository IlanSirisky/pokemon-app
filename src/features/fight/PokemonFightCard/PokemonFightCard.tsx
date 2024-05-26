import {
  StyledFightCard,
  HPbar,
  HPContainer,
} from "./styles";
import { XSmallRegular, HeadingLargeBold } from "../../../styles/typography";
import { CSSProperties } from "styled-components";
import CardBody from "../../../components/CardBody/CardBody";

interface FightCardProps {
  cardTitle: string;
  image: string;
  hp: number;
  playerName: string;
  subheadText?: string;
  cornerText?: string;
  topCornerIcon?: string;
  style?: CSSProperties;
}

const PokemonFightCard = ({
  cardTitle,
  image,
  hp,
  playerName,
  subheadText,
  cornerText,
  topCornerIcon,
  style,
}: FightCardProps) => {
  return (
    <StyledFightCard style={style}>
      <HeadingLargeBold>{playerName}</HeadingLargeBold>
      <CardBody
        cardTitle={cardTitle}
        image={image}
        subheadText={subheadText}
        cornerText={cornerText}
        topCornerIcon={topCornerIcon}
      />
      <HPContainer>
        <HPbar></HPbar>
        <XSmallRegular>{hp} HP</XSmallRegular>
      </HPContainer>
    </StyledFightCard>
  );
};

export default PokemonFightCard;
