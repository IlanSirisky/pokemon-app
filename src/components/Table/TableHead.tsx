import TableCell from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ColumnCellStyle, TableHeadRowStyle } from "./styles";
import { IColumnLabels } from "./types";

interface TableHeadProps {
  columnTitles: IColumnLabels[];
}

const TableHead = ({ columnTitles }: TableHeadProps) => {
  return (
    <MuiTableHead>
      <TableRow sx={TableHeadRowStyle}>
        {columnTitles.map((cell) => (
          <TableCell
            sx={{
              ...ColumnCellStyle,
              padding: cell?.padding,
              width: cell?.width,
            }}
            key={cell.value}
            align="left">
            {cell.label}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
