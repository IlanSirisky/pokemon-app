import { TablePagination as MuiTablePagination } from "@mui/material";
import {
  TablePaginationWrapper,
  TablePaginationLeft,
  TablePaginationRight,
} from "./styles";

interface TablePaginationProps {
  rowsPerPageOptions: number[];
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  onRowsPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TablePagination = ({
  rowsPerPageOptions,
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}: TablePaginationProps) => {
  return (
    <TablePaginationWrapper>
      <TablePaginationLeft>
        <MuiTablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          labelRowsPerPage="Rows per page"
          labelDisplayedRows={() => null}
          sx={{ border: "none", margin: 0, padding: 0 }}
        />
      </TablePaginationLeft>
      <TablePaginationRight>
        <MuiTablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={() => {}}
          sx={{ border: "none", margin: 0, padding: 0 }}
        />
      </TablePaginationRight>
    </TablePaginationWrapper>
  );
};

export default TablePagination;
