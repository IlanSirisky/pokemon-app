import { IPokemonData } from "../../../types/pokemonTypes";
import PokemonBasicCard from "../PokemonBasicCard/PokemonBasicCard";
import strength from "../../../assets/icons/strength.svg";
import { CardViewContainer } from "./styles";
import { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import PokemonModalCard from "../../PokemonModalCard/PokemonModalCard";
import { transformPokemonDataToAttributes } from "../../../utils/transformData";

interface PokemonCardViewProps {
  data: IPokemonData[];
}

const PokemonCardView = ({ data }: PokemonCardViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState<IPokemonData | null>(null);

  const handleOpenModal = (item: IPokemonData) => {
    setIsModalOpen(true);
    setselectedCard(item);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setselectedCard(null);
  };
  return (
    <CardViewContainer>
      {data.map((item) => (
        <PokemonBasicCard
          handleClick={() => handleOpenModal(item)}
          key={item.id}
          subheadText={item.id}
          cardTitle={item.name}
          image={item.imageSrc}
          cornerText={`${item.px}px`}
          topCornerIcon={strength}
        />
      ))}
      {selectedCard && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <PokemonModalCard
            title={selectedCard.name}
            subheadText={selectedCard.id}
            image={selectedCard.imageSrc}
            description={selectedCard.description}
            attributes={transformPokemonDataToAttributes(selectedCard)}
          />
        </Modal>
      )}
    </CardViewContainer>
  );
};

export default PokemonCardView;
