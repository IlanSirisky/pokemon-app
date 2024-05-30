import styled from "styled-components";
import { Modal, Box, IconButton } from "@mui/material";

export const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ModalContent = styled(Box)`
  position: relative;
  width: 500px;
  box-shadow: 1px 1px 25px 0px #71787f1a;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
`;