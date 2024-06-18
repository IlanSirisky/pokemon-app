import styled from "styled-components";
import { flexColumn } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS, MISC_COLORS } from "../../styles/colors";
import { Form } from "formik";

export const CustomInputWrapper = styled(flexColumn)`
  gap: ${cssSpacings.s6};
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: ${cssSpacings.s9} ${cssSpacings.s6} ${cssSpacings.s9} ${cssSpacings.s8};
  gap: ${cssSpacings.s4};
  border: 1px solid ${COLORS.Neutrals.N200};
  border-radius: ${cssSpacings.s8};
  height: ${cssSpacings.s20};

  &:focus {
    border-color: ${COLORS.Primary.P300};
  }
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