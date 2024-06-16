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
import { IPokemonData } from "../../types/pokemonTypes";
import { SxProps, Theme } from "@mui/material/styles";

interface TableProps {
  columnTitles: IColumnLabels[];
  data: IPokemonData[];
  rowPerPageOptions?: number[];
  sx?: SxProps<Theme>;
  rowsPerPage: number;
  page: number;
  count: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Table = ({
  columnTitles,
  data,
  rowPerPageOptions = [5, 10, 20],
  sx = {},
  rowsPerPage,
  page,
  count,
  onPageChange,
  onRowsPerPageChange,
}: TableProps) => {
  return (
    <TableWrapper>
      <Paper sx={{ width: "100%", boxShadow: "none", ...sx }}>
        <TableContainer>
          <MuiTable sx={{ minWidth: 650 }}>
            <TableHead columnTitles={columnTitles} />
            {data && data.length === 0 ? (
              <TableBodyEmptyState
                columnTitles={columnTitles}
                text="No pokemons were found."
                img={EmptySearchIcon}
              />
            ) : (
              <TableBody data={data} columnTitles={columnTitles} />
            )}
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowPerPageOptions}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
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
