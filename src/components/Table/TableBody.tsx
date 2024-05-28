import { TableBody as MuiTableBody, TableCell, TableRow } from "@mui/material";
import Avatar from "../Avatar/Avatar";
import { TitleDataCellStyle, DataCellStyle, DataCellWrapper } from "./styles";
import { BodyRegular, HeadingMediumRegular } from "../../styles/typography";
import { avatarSizes } from "../../styles/stylingValues";
import { COLORS } from "../../styles/colors";
import { IColumnLabels } from "./types";

const { Neutrals } = COLORS;

interface TableBodyProps<T> {
  data: T[];
  columnTitles: IColumnLabels[];
  page: number;
  rowsPerPage: number;
}

const TableBody = <T,>({
  data,
  columnTitles,
  page,
  rowsPerPage,
}: TableBodyProps<T>) => {
  return (
    <MuiTableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => (
          <TableRow key={index}>
            {columnTitles.map((column) => (
              <TableCell key={column.value} sx={DataCellStyle} align="left">
                {column.value === "title" ? (
                  <TitleDataCellStyle>
                    {row.avatar && (
                      <Avatar
                        alt={row.name}
                        image={row.avatar}
                        size={avatarSizes.large}
                      />
                    )}
                    <HeadingMediumRegular>{row.name}</HeadingMediumRegular>
                  </TitleDataCellStyle>
                ) : (
                  <DataCellWrapper>
                    <BodyRegular
                      style={{
                        color:
                          column.value === "id" ? Neutrals.N300 : Neutrals.N500,
                      }}>
                      {row[column.value]}
                    </BodyRegular>
                  </DataCellWrapper>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
    </MuiTableBody>
  );
};

export default TableBody;
