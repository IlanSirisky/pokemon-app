import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

interface SkeletonCardViewProps {
  itemsPerPage?: number;
}

const SkeletonCardView = ({ itemsPerPage = 8 }: SkeletonCardViewProps) => {
  const skeletonCards = Array.from(new Array(itemsPerPage));

  return (
    <Box display="flex" flexWrap="wrap" gap={"24px"}>
      {skeletonCards.map((_, index) => (
        <Box key={index} width={322} height={314}>
          <Skeleton
            variant="rectangular"
            width={322}
            height={314}
            sx={{ borderRadius: "8px" }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SkeletonCardView;
