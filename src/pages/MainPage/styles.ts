import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";

export const MainPageWrapper = styled(flexColumn)`
  padding: ${cssSpacings.s16} ${cssSpacings.s40} ${cssSpacings.s38} ${cssSpacings.s40};
  gap: ${cssSpacings.s16};
  height: 100%;
`;

export const InputToolsWrapper = styled(flexRow)`
  align-content: center;
  justify-content: space-between;
`;

export const InputFieldWrapper = styled(InputToolsWrapper)`
  gap: ${cssSpacings.s32};
`;
