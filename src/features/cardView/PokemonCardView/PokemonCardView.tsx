import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IPokemonData } from "../../../types/pokemonTypes";
import PokemonBasicCard from "../PokemonBasicCard/PokemonBasicCard";
import strength from "../../../assets/icons/strength.svg";
import {
  CardViewContainer,
  PaginationStyle,
  PaginationWrapper,
} from "./styles";
import Modal from "../../../components/Modal/Modal";
import PokemonModalCard from "../../PokemonModalCard/PokemonModalCard";
import {
  transformPokemonDataToProfileAttributes,
  transformPokemonDataToStatsAttributes,
} from "../../../utils/transformData";
import { fetchPokemonById } from "../../../hooks/useFetchPokemonData";
import Pagination from "@mui/material/Pagination";
import { Skeleton } from "@mui/material";

interface PokemonCardViewProps {
  data: IPokemonData[];
  totalCount: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
}

const PokemonCardView = ({
  data,
  totalCount,
  rowsPerPage,
  page,
  onPageChange,
}: PokemonCardViewProps) => {
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
    <>
      <CardViewContainer>
        {data.map((item) => (
            <PokemonBasicCard
            key={item.id}
              handleClick={() => handleOpenModal(+item.id)}
              pokemon={item}
              topCornerIcon={strength}
              style={{ cursor: "pointer" }}
            />
        ))}
        <Modal isOpen={!!selectedPokemonId} onClose={handleCloseModal}>
          {selectedPokemonId && !isLoading && !error && pokemonDetails && (
            <PokemonModalCard
              title={pokemonDetails.name}
              subheadText={`#${pokemonDetails.id}`}
              image={pokemonDetails.image}
              description={pokemonDetails.description}
              profileAttributes={transformPokemonDataToProfileAttributes(
                pokemonDetails
              )}
              statsAttributes={transformPokemonDataToStatsAttributes(
                pokemonDetails
              )}
            />
          )}
          {isLoading && (
          <Skeleton
            variant="rectangular"
            height={600}
            width={"100%"}
            sx={{ borderRadius: "8px" }}
          />
        )}
          {error && <p>Error loading data</p>}
        </Modal>
      </CardViewContainer>
      <PaginationWrapper>
        <Pagination
          count={Math.ceil(totalCount / rowsPerPage)}
          page={page}
          onChange={onPageChange}
          sx={PaginationStyle}
        />
      </PaginationWrapper>
    </>
  );
};

export default PokemonCardView;
