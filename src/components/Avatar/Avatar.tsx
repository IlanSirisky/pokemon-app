import { StyledAvatar } from "./styles";

interface AvatarProps {
  image: string;
  alt?: string;
  size: number,
}

const Avatar = ({ image, alt = "Avatar", size }: AvatarProps) => {
  return <StyledAvatar $size={size} src={image} alt={alt} />;
};

export default Avatar;
