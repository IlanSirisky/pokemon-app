import styled from "styled-components";
import { cssSpacings } from "../../../styles/stylingValues";
import { paginationFontStyle } from "../../../components/Table/styles";

export const CardViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(322px, 0.5fr));
  gap: ${cssSpacings.s24};
  justify-content: center;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationStyle = {
  marginTop: 2,
  "& .MuiPaginationItem-root": {
    ...paginationFontStyle,
  },
};
