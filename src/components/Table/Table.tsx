import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Avatar from "../Avatar/Avatar";
import { avatarSizes } from "../../styles/stylingValues";
import pokemonsMockData from "../../data/pokemonMockData";
import {
  TableWrapper,
  StyledTableCell,
  TableHeadCellStyle,
  TableHeadRowStyle,
} from "./styles";

const tableHead = [
  { name: "Pokemon name" },
  { name: "ID" },
  { name: "Description" },
  { name: "Power level" },
  { name: "HP level" },
];

export default function PokemonTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
      <Paper sx={{ width: "95%", overflow: "hidden", boxShadow: "none" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="pokemon table">
            <TableHead>
              <TableRow sx={TableHeadRowStyle}>
                {tableHead.map((cell) => (
                  <TableCell sx={TableHeadCellStyle} key={cell.name}>
                    {cell.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemonsMockData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pokemon) => (
                  <TableRow key={pokemon.id}>
                    <StyledTableCell component="th" scope="row">
                      <Avatar
                        alt={pokemon.name}
                        image={pokemon.avatar}
                        size={avatarSizes.large}
                      />
                      {pokemon.name}
                    </StyledTableCell>
                    <TableCell>{pokemon.id}</TableCell>
                    <TableCell>{pokemon.description}</TableCell>
                    <TableCell>{pokemon.powerLevel}</TableCell>
                    <TableCell>{pokemon.hp}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={pokemonsMockData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} of ${count}`
          }
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        />
      </Paper>
    </TableWrapper>
  );
}
