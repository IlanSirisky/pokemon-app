import { DataCellWrapper } from "../../../components/Table/styles";
import { BodyRegular } from "../../../styles/typography";
import { IPokemonData } from "../../../types/pokemonTypes";

interface PokemonTypeTableCellProps {
  row: IPokemonData;
}

const PokemonTypeTableCell = ({ row }: PokemonTypeTableCellProps) => {
  return (
    <DataCellWrapper>
      <BodyRegular>{row.profile?.types.join(", ")}</BodyRegular>
    </DataCellWrapper>
  );
};

export default PokemonTypeTableCell;
