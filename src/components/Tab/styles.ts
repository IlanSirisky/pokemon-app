import styled from "styled-components";
import { flexRow } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

const { Primary } = COLORS;

export const StyledTab = styled(flexRow)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 78px;
  height: 38px;
  justify-content: space-evenly;
  gap: ${cssSpacings.s8};
  padding: ${cssSpacings.s4} ${cssSpacings.s8};
  background-color: transparent;
  border-bottom: ${({ $isActive }) => ($isActive ? `2px solid black` : "none")};

  &:hover {
    background-color: ${Primary.P50};
    cursor: pointer;
  }
`;

export const tabsWrapper = styled(flexRow)`
gap: ${cssSpacings.s8};
`;
