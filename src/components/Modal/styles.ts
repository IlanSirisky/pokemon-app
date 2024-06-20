import styled from "styled-components";
import { Box } from "@mui/material";
import { MISC_COLORS } from "../../styles/colors";
import { cssSpacings } from "../../styles/stylingValues";

export const modalStyles = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const ModalContent = styled(Box)`
  position: relative;
  width: 500px;
  box-shadow: ${cssSpacings.s1} ${cssSpacings.s1} ${cssSpacings.s25} 0
    ${MISC_COLORS.ModalBoxShadow};
`;

export const StyledCloseButton = styled.img`
  position: absolute;
  top: ${cssSpacings.s16};
  right: ${cssSpacings.s24};
  cursor: pointer;
`;
