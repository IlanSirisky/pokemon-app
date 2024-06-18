import { HeadingLargeBold } from "../../styles/typography";
import { PokemonTypesCount } from "../../types/pokemonTypes";
import { transformPokemonDataToPieChart } from "../../utils/transformData";
import PieChart from "../../components/PieChart/PieChart";
import {
  PieWrapper,
  StyledPieContainer,
} from "../../components/PieChart/styles";
import { HeadingStyles } from "./styles";

type PokemonTypesPieChartProps = {
  data: PokemonTypesCount;
};

const PokemonTypesPieChart = ({ data }: PokemonTypesPieChartProps) => {
  return (
    <StyledPieContainer>
      <HeadingLargeBold style={HeadingStyles}>Pokemon Types</HeadingLargeBold>
      <PieWrapper>
        <PieChart data={data} transformData={transformPokemonDataToPieChart} />
      </PieWrapper>
    </StyledPieContainer>
  );
};

export default PokemonTypesPieChart;
