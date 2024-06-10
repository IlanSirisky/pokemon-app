import Skeleton from "@mui/material/Skeleton";
import {
  Table as MuiTable,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

interface SkeletonTableProps {
  itemsPerPage?: number;
  columnNumber?: number;
}

const SkeletonTable = ({
  itemsPerPage = 5,
  columnNumber = 5,
}: SkeletonTableProps) => {
  const rows = Array.from(new Array(itemsPerPage));
  const columns = Array.from(new Array(columnNumber));

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((_, index) => (
              <TableCell key={index}>
                <Skeleton
                  variant="text"
                  height={48}
                  sx={{ borderRadius: "8px" }}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton
                    variant="rectangular"
                    height={54}
                    sx={{ borderRadius: "8px" }}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default SkeletonTable;
