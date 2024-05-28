import styled from "styled-components";
import { cssFontWeights, cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";
import { flexRow } from "../../styles/globalStyles";

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 38px;
`;

export const TableHeadRowStyle = {
  backgroundColor: `${COLORS.Primary.P50}`,
  border: `1px solid ${COLORS.Neutrals.N100}`,
};

export const ColumnCellStyle = {
  height: "48px",
  fontFamily: `'Mulish', sans-serif`,
  color: `${COLORS.Neutrals.N500}`,
  fontWeight: `${cssFontWeights.bold}`,
  lineHeight: "22px",
  fontSize: "14px",
  gap: `${cssSpacings.s8}`,
};

export const DataCellStyle = {
  paddingLeft: "0",
  paddingTop: "8px",
  paddingBottom: "8px",
  paddingRight: "20px",
};

export const TitleDataCellStyle = styled(flexRow)`
  display: flex;
  align-items: center;
  gap: ${cssSpacings.s16};
  padding-left: ${cssSpacings.s16};
`;

export const TablePaginationStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

export const DataCellWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
