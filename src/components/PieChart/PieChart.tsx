import { ResponsivePie, PieSvgProps } from "@nivo/pie";
import { HeadingLargeMedium } from "../../styles/typography";
import { SumStyle } from "./styles";
import PieChartLegend from "./PieChartLegend";
import { ChartDatum, CountData } from "./types";

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
  width = "22.5%",
  height = "300px",
}: PieChartProps<T>) => {
  const chartData = transformData(data);
  const fillPatterns = generateFillPatterns ? generateFillPatterns(data) : [];

  // Calculate total value for percentage calculation
  const totalValue = chartData.reduce((total, datum) => total + datum.value, 0);

  // Calculate percentages for legend
  const legendData = chartData.map((datum) => ({
    ...datum,
    percentage: Math.round((datum.value / totalValue) * 100),
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
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
      <PieChartLegend data={legendData} />
    </div>
  );
};

export default PieChart;
