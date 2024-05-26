import styled from "styled-components";

export const StyledAvatar = styled.img<{ $size: number }>`
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  border-radius: 50%;
`;