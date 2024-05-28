import * as React from "react";
import { Table as MuiTable, TableContainer, Paper } from "@mui/material";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { TableWrapper } from "./styles";
import { IColumnLabels } from "./types";
import CustomTablePagination from "./TablePagination";

interface TableProps<T> {
  columnTitles: IColumnLabels[];
  data: T[];
  rowPerPageOptions?: number[];
  sx?: object;
}

const Table = <T,>({
  columnTitles,
  data,
  rowPerPageOptions = [5, 10, 20],
  sx = {},
}: TableProps<T>) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowPerPageOptions[0]);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableWrapper>
      <Paper sx={{ width: "95%", boxShadow: "none", ...sx }}>
        <TableContainer>
          <MuiTable sx={{ minWidth: 650 }}>
            <TableHead columnTitles={columnTitles} />
            {data.length === 0 ? (
              <div>No Pokemons exist</div>
            ) : (
              <TableBody
                data={data}
                columnTitles={columnTitles}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            )}
          </MuiTable>
        </TableContainer>
        <CustomTablePagination
          rowsPerPageOptions={rowPerPageOptions}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </TableWrapper>
  );
};

export default Table;
