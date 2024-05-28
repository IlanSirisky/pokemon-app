export interface IColumnLabels {
  value: string;
  label: string;
  padding?: string;
  width?: string;
  component?: (row: any) => React.ReactNode;
}
