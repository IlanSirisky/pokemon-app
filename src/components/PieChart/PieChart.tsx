import { ResponsivePie, PieSvgProps } from "@nivo/pie";
import { HeadingLargeMedium } from "../../styles/typography";
import { SumStyle } from "./styles";
import { ChartDatum } from "./types";

type PieChartProps = {
  data: ChartDatum[];
  generateFillPatterns?: (
    data: ChartDatum[]
  ) => PieSvgProps<ChartDatum>["fill"];
  centeredText?: number | string;
  width?: string;
  height?: string;
};

const PieChart = ({
  data,
  generateFillPatterns,
  centeredText,
  width = "22.5%",
  height = "300px",
}: PieChartProps) => {
  const fillPatterns = generateFillPatterns ? generateFillPatterns(data) : [];

  return (
    <div
      style={{
        position: "absolute",
        width: `${width}`,
        height: `${height}`,
      }}>
      <ResponsivePie
        data={data}
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
        <HeadingLargeMedium>{centeredText}</HeadingLargeMedium>
      </div>
    </div>
  );
};

export default PieChart;
