import Avatar from "../../../components/Avatar/Avatar";
import { TitleDataCellStyle } from "../../../components/Table/styles";
import { avatarSizes } from "../../../styles/stylingValues";
import { HeadingMediumRegular } from "../../../styles/typography";
import { IPokemonData } from "../../../types/pokemonTypes";
import pokeballIcon from "../../../assets/icons/pokeball.svg";

interface PokemonAvatarTableCellProps {
  row: IPokemonData;
}

const PokemonAvatarTableCell = ({ row }: PokemonAvatarTableCellProps) => {
  return (
    <TitleDataCellStyle>
      {row.image && (
        <Avatar
          alt={row.name}
          image={row.image}
          avatarSize={avatarSizes.medium}
          wrapperSize={avatarSizes.large}
        />
      )}
      <HeadingMediumRegular>{row.name}</HeadingMediumRegular>
      {row.isOwned && (
        <Avatar
          image={pokeballIcon}
          alt="pokeball"
          avatarSize={avatarSizes.small}
        />
      )}
    </TitleDataCellStyle>
  );
};

export default PokemonAvatarTableCell;
