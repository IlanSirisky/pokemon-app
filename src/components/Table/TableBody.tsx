import { useState } from 'react';
import { TableBody as MuiTableBody, TableCell, TableRow } from '@mui/material';
import { DataCellStyle, DataCellWrapper } from './styles';
import { BodyRegular } from '../../styles/typography';
import { IColumnLabels } from './types';
import { IPokemonData } from '../../types/pokemonTypes'; // fix types
import Modal from '../Modal/Modal';
import PokemonModalCard from '../../features/PokemonModalCard/PokemonModalCard';
import { transformPokemonDataToAttributes } from '../../utils/transformData';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonById } from '../../hooks/useFetchPokemonData';

interface TableBodyProps {
  data: any[]; // fix types
  columnTitles: IColumnLabels[];
  page: number;
  rowsPerPage: number;
}

const TableBody = ({ data, columnTitles, page, rowsPerPage }: TableBodyProps) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(null);

  const {
    data: pokemonDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['pokemon', selectedPokemonId],
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
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => (
          <TableRow
            hover
            key={index}
            onClick={() => handleOpenModal(row.id)}
            sx={{ cursor: 'pointer' }}>
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
      <Modal isOpen={!!selectedPokemonId} onClose={handleCloseModal}>
        {selectedPokemonId && !isLoading && !error && pokemonDetails && (
          <PokemonModalCard
            title={pokemonDetails.name}
            subheadText={String(pokemonDetails.id)}
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
