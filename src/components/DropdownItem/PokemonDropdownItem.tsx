import DropdownItem from "./DropdownItem";
import { avatarSizes } from "../../styles/stylingValues";

interface PokemonDropdownItemProps {
  name: string;
  avatar: string;
  endText: string;
  onClick: () => void;
  avatarSize?: number;
}

const PokemonDropdownItem = ({
  name,
  avatar,
  avatarSize = avatarSizes.small,
  endText,
  onClick,
}: PokemonDropdownItemProps) => {
  return (
    <DropdownItem
      avatar={avatar}
      text={name}
      endText={endText}
      avatarSize={avatarSize}
      onClick={onClick}
    />
  );
};

export default PokemonDropdownItem;
