import { useState } from "react";
import { TableBody as MuiTableBody, TableCell, TableRow } from "@mui/material";
import { DataCellStyle, DataCellWrapper } from "./styles";
import { BodyRegular } from "../../styles/typography";
import { IColumnLabels } from "./types";
import { IPokemonData } from "../../types/pokemonTypes";
import Modal from "../Modal/Modal";
import PokemonModalCard from "../../features/PokemonModalCard/PokemonModalCard";
import { transformPokemonDataToAttributes } from "../../utils/transformData";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonById } from "../../hooks/useFetchPokemonData";
import { getNestedValue } from "../../utils/getNestedValue";

interface TableBodyProps {
  data: IPokemonData[];
  columnTitles: IColumnLabels[];
}

const TableBody = ({ data, columnTitles }: TableBodyProps) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
    null
  );

  const {
    data: pokemonDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemon", selectedPokemonId],
    queryFn: () => fetchPokemonById(selectedPokemonId!),
    enabled: !!selectedPokemonId,
  });

  const handleOpenModal = (id: number) => {
    setSelectedPokemonId(id);
  };

  const handleCloseModal = () => {
    setSelectedPokemonId(null);
  };

  return (
    <MuiTableBody>
      {data.map((row, index) => (
        <TableRow
          hover
          key={index}
          onClick={() => handleOpenModal(+row.id)}
          sx={{ cursor: "pointer" }}>
          {columnTitles.map((column) => (
            <TableCell key={column.value} sx={DataCellStyle} align="left">
              {column.component ? (
                column.component(row)
              ) : (
                <DataCellWrapper>
                  <BodyRegular>{getNestedValue(row, column.value)}</BodyRegular>
                </DataCellWrapper>
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
      <Modal isOpen={!!selectedPokemonId} onClose={handleCloseModal}>
        {selectedPokemonId && !isLoading && !error && pokemonDetails && (
          <PokemonModalCard
            title={pokemonDetails.name}
            subheadText={`#${pokemonDetails.id}`}
            image={pokemonDetails.image}
            description={pokemonDetails.description}
            attributes={transformPokemonDataToAttributes(pokemonDetails)}
          />
        )}
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data</p>}
      </Modal>
    </MuiTableBody>
  );
};

export default TableBody;
