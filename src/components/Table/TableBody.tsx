import { TableBody as MuiTableBody, TableCell, TableRow } from "@mui/material";
import { DataCellStyle, DataCellWrapper } from "./styles";
import { BodyRegular } from "../../styles/typography";
import { IColumnLabels } from "./types";
import { IPokemonData } from "../../types/pokemonTypes";

interface TableBodyProps {
  data: IPokemonData[];
  columnTitles: IColumnLabels[];
  page: number;
  rowsPerPage: number;
}

const TableBody = ({
  data,
  columnTitles,
  page,
  rowsPerPage,
}: TableBodyProps) => {
  return (
    <MuiTableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => (
          <TableRow key={index}>
            {columnTitles.map((column) => (
              <TableCell key={column.value} sx={DataCellStyle} align="left">
                {column.component ? (
                  column.component(row)
                ) : (
                  <DataCellWrapper>
                    <BodyRegular>{row[column.value]}</BodyRegular>
                  </DataCellWrapper>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
    </MuiTableBody>
  );
};

export default TableBody;
