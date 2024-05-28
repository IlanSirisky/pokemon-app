import * as React from "react";
import MuiTable from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { TableWrapper, TablePaginationStyle } from "./styles";
import { IColumnLabels } from "./types";

interface TableProps {
  columnTitles: IColumnLabels[];
  data: any[];
  rowPerPageOptions?: number[];
  sx?: object;
}

const Table = ({
  columnTitles,
  data,
  rowPerPageOptions = [5, 10, 20],
  sx = {},
}: TableProps) => {
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
      <Paper
        sx={{ width: "95%", boxShadow: "none", ...sx }}>
        <TableContainer>
          <MuiTable sx={{ minWidth: 650 }} aria-label="pokemon table">
            <TableHead columnTitles={columnTitles} />
            <TableBody
              data={data}
              columnTitles={columnTitles}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowPerPageOptions}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} of ${count}`
          }
          sx={TablePaginationStyle}
        />
      </Paper>
    </TableWrapper>
  );
};

export default Table;
