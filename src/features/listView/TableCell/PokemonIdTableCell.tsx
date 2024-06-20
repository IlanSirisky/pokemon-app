import { DataCellWrapper } from "../../../components/Table/styles";
import { BodyRegular } from "../../../styles/typography";
import { IPokemonData } from "../../../types/pokemonTypes";
import { COLORS } from "../../../styles/colors";

const { Neutrals } = COLORS;

interface PokemonIdTableCellProps {
  row: IPokemonData;
}

const PokemonIdTableCell = ({ row }: PokemonIdTableCellProps) => {
  return (
    <DataCellWrapper>
      <BodyRegular
        style={{
          color: Neutrals.N300,
          textAlign: "right",
        }}>
        {`${row.id}`}
      </BodyRegular>
    </DataCellWrapper>
  );
};

export default PokemonIdTableCell;
