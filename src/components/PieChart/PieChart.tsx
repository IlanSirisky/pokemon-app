import { ResponsivePie, PieSvgProps } from "@nivo/pie";
import { HeadingLargeMedium } from "../../styles/typography";
import { SumStyle } from "./styles";

type GenericCountData = {
  [key: string]: number;
};

type ChartDatum = {
  id: string;
  label: string;
  value: number;
  color?: string;
};

type GenericPieChartProps<T extends GenericCountData> = {
  data: T;
  transformData: (data: T) => ChartDatum[];
  generateFillPatterns?: (data: T) => PieSvgProps<ChartDatum>["fill"];
  width?: string;
  height?: string;
};

const GenericPieChart = <T extends GenericCountData>({
  data,
  transformData,
  generateFillPatterns,
  width = "27.5%",
  height = "400px",
}: GenericPieChartProps<T>) => {
  const chartData = transformData(data);
  const fillPatterns = generateFillPatterns ? generateFillPatterns(data) : [];

  // Calculate total value for percentage calculation
  const totalValue = chartData.reduce((total, datum) => total + datum.value, 0);

  return (
    <div
      style={{ position: "absolute", width: `${width}`, height: `${height}` }}>
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
        arcLabelsSkipAngle={1000} // Ensuring arc labels are not shown
        arcLinkLabelsSkipAngle={1000} // Ensuring arc link labels are not shown
        fill={fillPatterns}
        colors={{ datum: "data.color" }}
      />
      <div style={SumStyle}>
        <HeadingLargeMedium>{totalValue}</HeadingLargeMedium>
      </div>
    </div>
  );
};

export default GenericPieChart;
