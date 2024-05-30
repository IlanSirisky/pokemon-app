import React from "react";
import xCloseIcon from "../../assets/icons/xCloseIcon.svg";
import { StyledModal, ModalContent, CloseButton } from "./styles";

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
    <StyledModal open={isOpen} onClose={onClose} sx={sx}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Close Icon" />
        </CloseButton>
        {children}
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;