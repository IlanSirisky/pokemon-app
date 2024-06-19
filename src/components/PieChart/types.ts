export type CountData = {
  [key: string]: number;
};

export type ChartDatum = {
  id: string;
  label: string;
  value: number;
  color: string;
};

export type LegendData = ChartDatum & {
  percentage: number;
};
