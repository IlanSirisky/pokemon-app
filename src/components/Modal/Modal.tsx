import React from "react";
import xCloseIcon from "../../assets/icons/xCloseIcon.svg";
import { ModalContent, CloseButton, modalStyles } from "./styles";
import { Modal as MuiModal, Box } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeIcon?: string;
  sx?: object;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  closeIcon = xCloseIcon,
  sx = {},
}: ModalProps) => {
  return (
    <MuiModal open={isOpen} onClose={onClose}>
      <Box sx={{ ...modalStyles, ...sx }}>
        <ModalContent>
          <CloseButton onClick={onClose}>
            <img src={closeIcon} alt="Close Icon" />
          </CloseButton>
          {children}
        </ModalContent>
      </Box>
    </MuiModal>
  );
};

export default Modal;
