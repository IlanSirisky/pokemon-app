import styled from "styled-components";
import { MISC_COLORS } from "../../styles/colors";

export const AvatarWrapper = styled.div<{ $size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${MISC_COLORS.cardImageBackground};
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
`;

export const StyledAvatar = styled.img<{ $size: number }>`
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  border-radius: 50%;
`;
