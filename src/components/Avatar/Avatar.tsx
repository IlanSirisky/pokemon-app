import { AvatarWrapper, StyledAvatar } from "./styles";
import { avatarSizes } from "../../styles/stylingValues";

interface AvatarProps {
  image: string;
  alt?: string;
  wrapperSize?: number;
  avatarSize?: number;
}

const Avatar = ({
  image,
  alt = "Avatar",
  wrapperSize = avatarSizes.small,
  avatarSize = avatarSizes.small,
}: AvatarProps) => {
  return (
    <AvatarWrapper $size={wrapperSize}>
      <StyledAvatar $size={avatarSize} src={image} alt={alt} />
    </AvatarWrapper>
  );
};

export default Avatar;
