import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

const { Neutrals } = COLORS;

export const MainPageWrapper = styled(flexColumn)`
  padding: ${cssSpacings.s16} ${cssSpacings.s40} ${cssSpacings.s38} ${cssSpacings.s40};
  gap: ${cssSpacings.s16};
  background-color: ${Neutrals.N100};
  height: 100%;
`;

export const InputToolsWrapper = styled(flexRow)`
  justify-content: space-between;
`;

export const InputFieldWrapper = styled(InputToolsWrapper)`
  gap: ${cssSpacings.s32};
`;
