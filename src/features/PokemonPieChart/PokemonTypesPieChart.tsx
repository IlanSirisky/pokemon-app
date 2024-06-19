import { HeadingLargeBold } from "../../styles/typography";
import { PokemonTypesCount } from "../../types/pokemonTypes";
import { transformPokemonDataToPieChart } from "../../utils/transformData";
import PieChart from "../../components/PieChart/PieChart";
import {
  PieWrapper,
  StyledPieContainer,
} from "../../components/PieChart/styles";
import { HeadingStyles } from "./styles";
import PieChartLegend from "../../components/PieChart/PieChartLegend";

type PokemonTypesPieChartProps = {
  data: PokemonTypesCount;
};

const PokemonTypesPieChart = ({ data }: PokemonTypesPieChartProps) => {
  const chartData = transformPokemonDataToPieChart(data);

  // Calculate total value for percentage calculation
  const totalValue = chartData.reduce((total, datum) => total + datum.value, 0);

  // Calculate percentages for legend
  const legendData = chartData.map((datum) => ({
    ...datum,
    percentage: Math.round((datum.value / totalValue) * 100),
  }));

  return (
    <StyledPieContainer>
      <HeadingLargeBold style={HeadingStyles}>Pokemon Types</HeadingLargeBold>
      <PieWrapper>
        <PieChart data={chartData} centeredText={chartData.length} />
      </PieWrapper>
      <PieChartLegend data={legendData} />
    </StyledPieContainer>
  );
};

export default PokemonTypesPieChart;
