import { StyledBasicCard } from "./styles";
import { CSSProperties } from "styled-components";
import CardBody from "../../../components/CardBody/CardBody";
import { IPokemonData } from "../../../types/pokemonTypes";
import pokeballIcon from "../../../assets/icons/pokeball.svg";

interface BasicCardProps {
  pokemon: IPokemonData;
  topCornerIcon: string;
  handleClick?: () => void;
  style?: CSSProperties;
}

const PokemonBasicCard = ({
  pokemon,
  topCornerIcon,
  handleClick,
  style,
}: BasicCardProps) => {
  return (
    <StyledBasicCard style={style} onClick={handleClick}>
      <CardBody
        cardTitle={pokemon.name}
        image={pokemon.image}
        subheadText={`#${pokemon.id}`}
        cornerText={`${pokemon.baseStats?.attack}atk`}
        iconFlag={pokemon.isOwned}
        bottomIcon={pokeballIcon}
        topCornerIcon={topCornerIcon}
      />
    </StyledBasicCard>
  );
};

export default PokemonBasicCard;
