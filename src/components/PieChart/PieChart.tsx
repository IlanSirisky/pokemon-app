import { ResponsivePie, PieSvgProps } from "@nivo/pie";
import { BodyRegular, HeadingLargeMedium } from "../../styles/typography";
import {
  LegendColorIndicator,
  LegendItem,
  LegendItemContainer,
  StyledLegendContainer,
  SumStyle,
} from "./styles";
import { COLORS } from "../../styles/colors";

type CountData = {
  [key: string]: number;
};

type ChartDatum = {
  id: string;
  label: string;
  value: number;
  color: string;
};

type PieChartProps<T extends CountData> = {
  data: T;
  transformData: (data: T) => ChartDatum[];
  generateFillPatterns?: (data: T) => PieSvgProps<ChartDatum>["fill"];
  width?: string;
  height?: string;
};

const PieChart = <T extends CountData>({
  data,
  transformData,
  generateFillPatterns,
  width = "20%",
  height = "400px",
}: PieChartProps<T>) => {
  const chartData = transformData(data);
  const fillPatterns = generateFillPatterns ? generateFillPatterns(data) : [];

  // Calculate total value for percentage calculation
  const totalValue = chartData.reduce((total, datum) => total + datum.value, 0);

  // Calculate percentages for legend
  const legendData = chartData.map((datum) => ({
    ...datum,
    percentage: ((datum.value / totalValue) * 100).toFixed(0),
  }));

  return (
    <div
      style={{
        position: "absolute",
        width: `${width}`,
        height: `${height}`,
      }}>
      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 20, bottom: 40, left: 20 }}
        innerRadius={0.9}
        padAngle={0}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        fill={fillPatterns}
        colors={{ datum: "data.color" }}
      />
      <div style={SumStyle}>
        <HeadingLargeMedium>{totalValue}</HeadingLargeMedium>
      </div>
      <StyledLegendContainer>
        {legendData.map((datum) => (
          <LegendItemContainer key={datum.id}>
            <LegendItem>
              <LegendColorIndicator $color={datum.color} />
              <BodyRegular>{datum.label}</BodyRegular>
            </LegendItem>
            <BodyRegular style={{ color: `${COLORS.Neutrals.N300}` }}>
              {datum.percentage}%
            </BodyRegular>
          </LegendItemContainer>
        ))}
      </StyledLegendContainer>
    </div>
  );
};

export default PieChart;
