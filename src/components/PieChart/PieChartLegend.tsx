import { BodyRegular } from "../../styles/typography";
import { LegendData } from "./types";
import {
  LegendColorIndicator,
  LegendItem,
  LegendItemContainer,
  LegendPercentageStyle,
  StyledLegendContainer,
} from "./styles";

interface PieChartLegendProps {
  data: LegendData[];
}

const PieChartLegend = ({ data }: PieChartLegendProps) => {
  const sortedData: LegendData[] = [...data].sort(
    (a, b) => b.percentage - a.percentage
  );
  return (
    <div style={{overflowY: 'auto'}}>
      <StyledLegendContainer>
        {sortedData.map((datum) => (
          <LegendItemContainer key={datum.id}>
            <LegendItem>
              <LegendColorIndicator $color={datum.color} />
              <BodyRegular>{datum.label}</BodyRegular>
            </LegendItem>
            <BodyRegular style={LegendPercentageStyle}>
              {datum.percentage}%
            </BodyRegular>
          </LegendItemContainer>
        ))}
      </StyledLegendContainer>
    </div>
  );
};

export default PieChartLegend;
