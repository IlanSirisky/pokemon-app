import { HeadingLargeBold } from "../../styles/typography";
import { PokemonTypesCount } from "../../types/pokemonTypes";
import { transformPokemonDataToPieChart } from "../../utils/transformData";
import PieChart from "./PieChart";
import { StyledPieContainer } from "./styles";

type PokemonTypesPieChartProps = {
  data: PokemonTypesCount;
};

const PokemonTypesPieChart = ({ data }: PokemonTypesPieChartProps) => {
  return (
    <StyledPieContainer>
      <HeadingLargeBold>Types</HeadingLargeBold>
      <PieChart data={data} transformData={transformPokemonDataToPieChart} />
    </StyledPieContainer>
  );
};

export default PokemonTypesPieChart;
