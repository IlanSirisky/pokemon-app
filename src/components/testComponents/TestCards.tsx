import styled from "styled-components";
import pokemon from "../../data/pokemonMockData";
import PokemonBasicCard from "../../features/cardView/PokemonBasicCard/PokemonBasicCard";
import PokemonFightCard from "../../features/fight/PokemonFightCard/PokemonFightCard";
import strengthIcon from "../../assets/icons/strength.svg";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const TestCards = () => {
  return (
    <CardsContainer>
      {pokemon.map((poke) => (
        <Card key={poke.id}>
          <PokemonBasicCard
            cardTitle={poke.name}
            image={poke.image}
            subheadText={`#${poke.id}`}
            cornerText={`${poke.baseStats?.attack}atk`}
            topCornerIcon={strengthIcon}
          />
          <hr style={{ width: "90%" }} />
          <PokemonFightCard
            cardTitle={poke.name}
            image={poke.image}
            hp={poke.baseStats?.hp || 0}
            playerName={"You"}
            subheadText={`#${poke.id}`}
            cornerText={`${poke.baseStats?.attack}atk`}
            currentHp={poke.baseStats?.hp || 0}
            topCornerIcon={strengthIcon}
          />
        </Card>
      ))}
    </CardsContainer>
  );
};

export default TestCards;
