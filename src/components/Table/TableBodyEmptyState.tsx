import { TableRow, TableCell, TableBody } from "@mui/material";
import { IColumnLabels } from "./types";
import { HeadingMediumRegular } from "../../styles/typography";
import {
  EmptyStateStyles,
  EmptyStateWrapper,
  StyledEmptySearchIcon,
} from "./styles";
import { SxProps, Theme } from '@mui/material/styles';


interface TableBodyEmptyStateProps {
  columnTitles: IColumnLabels[];
  text: string;
  img?: string;
  sx?: SxProps<Theme>;
}

const TableBodyEmptyState = ({
  columnTitles,
  text,
  img,
  sx = {},
}: TableBodyEmptyStateProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell
          colSpan={columnTitles.length}
          align="center"
          sx={{ ...EmptyStateStyles.TableCell, ...sx }}>
          <EmptyStateWrapper>
            {img && (
              <StyledEmptySearchIcon>
                <img src={img} alt="Empty state" />
              </StyledEmptySearchIcon>
            )}
            <HeadingMediumRegular style={EmptyStateStyles.text}>
              {text}
            </HeadingMediumRegular>
          </EmptyStateWrapper>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableBodyEmptyState;
