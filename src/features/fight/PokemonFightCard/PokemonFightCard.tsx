import {
  StyledFightCard,
  healthBarStyles,
  HPContainer,
  healthBarTheme,
} from "./styles";
import { XSmallRegular, HeadingLargeBold } from "../../../styles/typography";
import { CSSProperties } from "styled-components";
import CardBody from "../../../components/CardBody/CardBody";
import LinearProgress from "@mui/material/LinearProgress";
import { ThemeProvider } from "@mui/material/styles";
import { calculateHealthPercentage } from "../../../utils/calcHealthPercentage";

interface FightCardProps {
  cardTitle: string;
  image: string;
  hp: number;
  currentHp: number;
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
  currentHp,
  playerName,
  subheadText,
  cornerText,
  topCornerIcon,
  style,
}: FightCardProps) => {
  const currentHealthPercentage = calculateHealthPercentage(currentHp, hp);

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
        <ThemeProvider theme={healthBarTheme}>
          {hp && currentHp && (
            <LinearProgress
              color={
                currentHealthPercentage > 50
                  ? "success"
                  : currentHealthPercentage > 20
                  ? "warning"
                  : "secondary"
              }
              sx={healthBarStyles}
              variant="determinate"
              value={calculateHealthPercentage(currentHp, hp)}
            />
          )}
        </ThemeProvider>
        <XSmallRegular>
          {currentHp}/{hp} HP
        </XSmallRegular>
      </HPContainer>
    </StyledFightCard>
  );
};

export default PokemonFightCard;
