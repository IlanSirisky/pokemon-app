import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { cssSpacings } from "../../styles/stylingValues";

export const MainPageWrapper = styled(flexColumn)`
  padding: ${cssSpacings.s16} ${cssSpacings.s40} ${cssSpacings.s38} ${cssSpacings.s40};
  gap: ${cssSpacings.s16};
  height: 100%;
`;

export const InputToolsWrapper = styled(flexRow)<{
  $tab: string;
  $myPokemons: boolean;
}>`
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: ${({ $tab, $myPokemons }) =>
    $tab === "List" && $myPokemons ? "69%" : "auto"};
`;

export const InputFieldWrapper = styled(flexRow)`
  align-items: center;
  align-content: center;
  justify-content: space-between;
  gap: ${cssSpacings.s32};
`;

export const TablePieChartStyles = {
  display: "flex",
  gap: "20px",
};

export const SkeletonStyle = { borderRadius: `${cssSpacings.s8}` };
