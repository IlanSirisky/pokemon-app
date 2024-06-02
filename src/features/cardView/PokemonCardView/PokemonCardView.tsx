import { IPokemonData } from "../../../types/pokemonTypes";
import PokemonBasicCard from "../PokemonBasicCard/PokemonBasicCard";
import strength from "../../../assets/icons/strength.svg";
import { CardViewContainer } from "./styles";

interface PokemonCardViewProps {
  data: IPokemonData[];
}

const PokemonCardView = ({ data }: PokemonCardViewProps) => {
  return (
    <CardViewContainer>
      {data.map((item) => (
        <PokemonBasicCard
          key={item.id}
          subheadText={item.id}
          cardTitle={item.name}
          image={item.imageSrc}
          cornerText={`${item.px}px`}
          topCornerIcon={strength}
        />
      ))}
    </CardViewContainer>
  );
};

export default PokemonCardView;
