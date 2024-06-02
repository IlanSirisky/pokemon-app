import * as React from "react";
import {
  Table as MuiTable,
  TableContainer,
  Paper,
  TablePagination,
} from "@mui/material";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableBodyEmptyState from "./TableBodyEmptyState";
import { TablePaginationStyle, TableWrapper } from "./styles";
import { IColumnLabels } from "./types";
import EmptySearchIcon from "../../assets/icons/EmptySearch.svg";

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
      <Paper sx={{ width: "100%", boxShadow: "none", ...sx }}>
        <TableContainer>
          <MuiTable sx={{ minWidth: 650 }}>
            <TableHead columnTitles={columnTitles} />
            {data.length === 0 ? (
              <TableBodyEmptyState
                columnTitles={columnTitles}
                text="No pokemons exist"
                img={EmptySearchIcon}
              />
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
        <TablePagination
          rowsPerPageOptions={rowPerPageOptions}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
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