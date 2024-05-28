import { StyledAvatar } from "./styles";
import { avatarSizes } from "../../styles/stylingValues";

interface AvatarProps {
  image: string;
  alt?: string;
  size?: number,
}

const Avatar = ({ image, alt = "Avatar", size = avatarSizes.small }: AvatarProps) => {
  return <StyledAvatar $size={size} src={image} alt={alt} />;
};

export default Avatar;