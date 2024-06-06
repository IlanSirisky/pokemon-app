import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IPokemonData } from "../../../types/pokemonTypes";
import PokemonBasicCard from "../PokemonBasicCard/PokemonBasicCard";
import strength from "../../../assets/icons/strength.svg";
import { CardViewContainer, CardWrapper } from "./styles";
import Modal from "../../../components/Modal/Modal";
import PokemonModalCard from "../../PokemonModalCard/PokemonModalCard";
import { transformPokemonDataToAttributes } from "../../../utils/transformData";
import { fetchPokemonById } from "../../../hooks/useFetchPokemonData";

interface PokemonCardViewProps {
  data: IPokemonData[];
}

const PokemonCardView = ({ data }: PokemonCardViewProps) => {
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
    <CardViewContainer>
      {data.map((item) => (
        <CardWrapper key={item.id}>
          <PokemonBasicCard
            handleClick={() => handleOpenModal(+item.id)} 
            pokemon={item}
            topCornerIcon={strength}
            style={{ cursor: "pointer" }}
          />
        </CardWrapper>
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
    </CardViewContainer>
  );
};

export default PokemonCardView;
