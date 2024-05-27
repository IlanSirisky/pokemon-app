import styled from "styled-components";
import pokemon from "../../data/pokemonMockData";
import PokemonBasicCard from "../../features/cardView/PokemonBasicCard/PokemonBasicCard";
import PokemonFightCard from "../../features/fight/PokemonFightCard/PokemonFightCard";
import strengthIcon from "../../assets/icons/strength.svg";
import { HeadingXLargeMedium } from "../../styles/typography";

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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <HeadingXLargeMedium>Pokemon Cards Components</HeadingXLargeMedium>
      </div>
      <div>
        <CardsContainer>
          {pokemon.map((poke) => (
            <Card key={poke.id}>
              <PokemonBasicCard
                cardTitle={poke.name}
                image={poke.imageSrc}
                subheadText={`#${poke.id}`}
                cornerText={`${poke.px}px`}
                topCornerIcon={strengthIcon}
              />
              <hr style={{ width: "90%" }} />
              <PokemonFightCard
                cardTitle={poke.name}
                image={poke.imageSrc}
                hp={poke.hp}
                playerName={"You"}
                subheadText={`#${poke.id}`}
                cornerText={`${poke.px}px`}
                topCornerIcon={strengthIcon}
              />
            </Card>
          ))}
        </CardsContainer>
      </div>
    </>
  );
};

export default TestCards;
