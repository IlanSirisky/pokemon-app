import {
  StyledFightCard,
  healthBarStyles,
  HPContainer,
  healthBarTheme,
  HeaderContainer,
  IconContainer,
} from "./styles";
import { XSmallRegular, HeadingLargeBold } from "../../../styles/typography";
import { CSSProperties } from "styled-components";
import CardBody from "../../../components/CardBody/CardBody";
import LinearProgress from "@mui/material/LinearProgress";
import { ThemeProvider } from "@mui/material/styles";
import {
  calculateHealthPercentage,
  getColor,
} from "../../../utils/fightPageFunctions";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";

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
  opponent?: boolean;
  activeFight?: boolean;
  onClick?: () => void;
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
  opponent,
  activeFight,
  onClick,
}: FightCardProps) => {
  const currentHealthPercentage = calculateHealthPercentage(currentHp, hp);

  return (
    <StyledFightCard style={style}>
      <HeaderContainer>
        <HeadingLargeBold>{playerName}</HeadingLargeBold>
        {!activeFight && opponent && (
          <IconContainer>
            <IconButton sx={{ padding: 0 }} onClick={onClick}>
              <RefreshIcon />
            </IconButton>
          </IconContainer>
        )}
      </HeaderContainer>
      <CardBody
        cardTitle={cardTitle}
        image={image}
        subheadText={subheadText}
        cornerText={cornerText}
        topCornerIcon={topCornerIcon}
        style={{ width: "274px" }}
      />
      <HPContainer>
        <ThemeProvider theme={healthBarTheme}>
          {hp && currentHp && (
            <LinearProgress
              color={getColor(currentHealthPercentage)}
              sx={healthBarStyles}
              variant="determinate"
              value={calculateHealthPercentage(currentHp, hp)}
            />
          )}
        </ThemeProvider>
        <XSmallRegular>
          {currentHp < 0 ? 0 : currentHp}/{hp} HP
        </XSmallRegular>
      </HPContainer>
    </StyledFightCard>
  );
};

export default PokemonFightCard;
