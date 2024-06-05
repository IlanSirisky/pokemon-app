import Avatar from "../../../components/Avatar/Avatar";
import { TitleDataCellStyle } from "../../../components/Table/styles";
import { avatarSizes } from "../../../styles/stylingValues";
import { HeadingMediumRegular } from "../../../styles/typography";
import { IPokemonData } from "../../../types/pokemonTypes";
import pokeballIcon from "../../../assets/icons/pokeball.svg";

interface PokemonAvatarTableCellProps {
  row: any;
}

const PokemonAvatarTableCell = ({ row }: PokemonAvatarTableCellProps) => {
  return (
    <TitleDataCellStyle>
      {row.image && (
        <Avatar alt={row.name} image={row.image} size={avatarSizes.large} />
      )}
      <HeadingMediumRegular>{row.name}</HeadingMediumRegular>
      {row.isOwned && (
        <Avatar image={pokeballIcon} alt="pokeball" size={avatarSizes.small} />
      )}
    </TitleDataCellStyle>
  );
};

export default PokemonAvatarTableCell;
