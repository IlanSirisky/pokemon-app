import Avatar from "../../../components/Avatar/Avatar";
import { TitleDataCellStyle } from "../../../components/Table/styles";
import { avatarSizes } from "../../../styles/stylingValues";
import { HeadingMediumRegular } from "../../../styles/typography";
import { IPokemonData } from "../../../types/pokemonTypes";

interface PokemonAvatarTableCellProps {
    row: IPokemonData;
}

const PokemonAvatarTableCell = ({row}: PokemonAvatarTableCellProps) => {
  return (
    <TitleDataCellStyle>
      {row.avatar && (
        <Avatar alt={row.name} image={row.avatar} size={avatarSizes.large} />
      )}
      <HeadingMediumRegular>{row.name}</HeadingMediumRegular>
    </TitleDataCellStyle>
  );
};

export default PokemonAvatarTableCell;