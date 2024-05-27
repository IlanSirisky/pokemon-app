import styled from "styled-components";
import TableCell from "@mui/material/TableCell";
import { cssFontWeights } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";

export const TableWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 38px;
    `;

export const TableHeadRowStyle = {
  backgroundColor: `${COLORS.Primary.P50}`,
  border: `1px solid ${COLORS.Neutrals.N100}`,
};

export const TableHeadCellStyle = {
  fontFamily: `'Mulish', sans-serif`,
  color: `${COLORS.Neutrals.N500}`,
  fontWeight: `${cssFontWeights.bold}`,
  fontSize: "14px",
  lineHeight: "22px",
};

export const StyledTableCell = styled(TableCell)(() => ({
  display: "flex",
  alignItems: "center",
}));
