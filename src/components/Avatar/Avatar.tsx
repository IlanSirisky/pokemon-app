import { StyledAvatar } from "./styles";

interface AvatarProps {
  image: string;
  alt?: string;
}

const Avatar = ({ image, alt = "Avatar" }: AvatarProps) => {
  return <StyledAvatar src={image} alt={alt} />;
};

export default Avatar;
