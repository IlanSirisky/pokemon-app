import { TableBody as MuiTableBody, TableCell, TableRow } from "@mui/material";
import { DataCellStyle, DataCellWrapper } from "./styles";
import { BodyRegular } from "../../styles/typography";
import { IColumnLabels } from "./types";
import { IPokemonData } from "../../types/pokemonTypes";
import { useState } from "react";
import Modal from "../Modal/Modal";
import PokemonModalCard from "../../features/PokemonModalCard/PokemonModalCard";
import { transformPokemonDataToAttributes } from "../../utils/transformData";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<IPokemonData | null>(null);

  const handleOpenModal = (row: IPokemonData) => {
    setIsModalOpen(true);
    setSelectedRow(row);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <MuiTableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => (
          <TableRow hover key={index} onClick={() => handleOpenModal(row)}>
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
      {selectedRow && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <PokemonModalCard
            title={selectedRow.name}
            subheadText={selectedRow.id}
            image={selectedRow.imageSrc}
            description={selectedRow.description}
            attributes={transformPokemonDataToAttributes(selectedRow)}
          />
        </Modal>
      )}
    </MuiTableBody>
  );
};

export default TableBody;
