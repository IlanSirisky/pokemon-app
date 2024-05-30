import styled from "styled-components";
import { Box, IconButton } from "@mui/material";

export const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const ModalContent = styled(Box)`
  position: relative;
  width: 500px;
  box-shadow: 1px 1px 25px 0px #71787f1a;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  padding: 0;
`;
