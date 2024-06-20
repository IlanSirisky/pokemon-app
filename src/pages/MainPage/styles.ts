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
  justify-content: space-between;
  width: ${({ $tab, $myPokemons }) =>
    $tab === "List" && $myPokemons ? "69%" : "auto"};

  @media (max-width: ${({ $tab, $myPokemons }) => $tab === "List" && $myPokemons ? "1120px" : "810px"}) {
    gap: ${cssSpacings.s12};
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const InputFieldWrapper = styled(flexRow)<{
  $tab: string;
  $myPokemons: boolean;
}>`
  align-items: center;
  align-content: center;
  justify-content: space-between;
  gap: ${cssSpacings.s32};

  @media (max-width: ${({ $tab, $myPokemons }) => $tab === "List" && $myPokemons ? "850px" : "610px"}) {
    flex-direction: column;
    align-items: center;
    gap: ${cssSpacings.s16};
    width: 100%;
  }
`;

export const TablePieChartStyles = {
  display: "flex",
  gap: `${cssSpacings.s20}`,
};

export const SkeletonStyle = { borderRadius: `${cssSpacings.s8}` };
