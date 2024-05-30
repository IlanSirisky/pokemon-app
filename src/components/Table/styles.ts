import styled from "styled-components";
import { cssFontWeights, cssSpacings } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";
import { flexColumn, flexRow } from "../../styles/globalStyles";

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${cssSpacings.s38};
`;

export const TableHeadRowStyle = {
  backgroundColor: `${COLORS.Primary.P50}`,
  border: `1px solid ${COLORS.Neutrals.N100}`,
};

export const ColumnCellStyle = {
  height: `${cssSpacings.s48}`,
  fontFamily: `'Mulish', sans-serif`,
  color: `${COLORS.Neutrals.N500}`,
  fontWeight: `${cssFontWeights.bold}`,
  lineHeight: "22px",
  fontSize: "14px",
  gap: `${cssSpacings.s8}`,
};

export const DataCellStyle = {
  padding: `${cssSpacings.s8} ${cssSpacings.s20} ${cssSpacings.s8} 0`,
};

export const TitleDataCellStyle = styled(flexRow)`
  display: flex;
  align-items: center;
  gap: ${cssSpacings.s16};
  padding-left: ${cssSpacings.s16};
`;

export const DataCellWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TablePaginationWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const TablePaginationLeft = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  "& .MuiTablePagination-actions": {
    display: "none",
  },
}));

export const TablePaginationRight = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const EmptyStateWrapper = styled(flexColumn)`
  align-items: center;
`;

export const StyledEmptySearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${cssSpacings.s150};
  width: ${cssSpacings.s150};
  border-radius: 50%;
  background-color: ${COLORS.Primary.P50};
`;

export const EmptyStateStyles = {
  TableCell: { padding: `${cssSpacings.s120} 0`, gap: `${cssSpacings.s16}` },
  text: { color: `${COLORS.Neutrals.N300}` },
};
