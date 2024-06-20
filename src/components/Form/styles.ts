import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS, MISC_COLORS } from "../../styles/colors";
import { Form } from "formik";

export const CustomInputWrapper = styled(flexColumn)`
  gap: ${cssSpacings.s6};
  width: 100%;
  position: relative;
`;

export const InputContainer = styled(flexColumn)`
  gap: ${cssSpacings.s8};
`;

export const InputLabelContainer = styled(flexRow)`
  gap: ${cssSpacings.s4};
`;

export const StyledInput = styled.input`
  padding: ${cssSpacings.s9} ${cssSpacings.s60} ${cssSpacings.s9} ${cssSpacings.s8};
  border: 1px solid ${COLORS.Neutrals.N200};
  border-radius: ${cssSpacings.s8};
  height: ${cssSpacings.s20};

  &:focus {
    border-color: ${COLORS.Primary.P300};
  }
`;

export const ErrorContainer = styled.div`
  min-height: ${cssSpacings.s16};
`;

export const ErrorStyles = {
  color: `${MISC_COLORS.HealthBar.red}`,
};

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${cssSpacings.s24};
`;

export const buttonStyles = {
  width: "100%",
};

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 ${cssSpacings.s8} 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
