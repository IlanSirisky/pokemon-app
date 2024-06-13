import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";
import { cssSpacings } from "../../../styles/stylingValues";

interface SkeletonCardViewProps {
  itemsPerPage?: number;
  customWidth?: number;
  customHeight?: number;
}

const SkeletonCardView = ({
  itemsPerPage = 8,
  customHeight = 314,
  customWidth = 322,
}: SkeletonCardViewProps) => {
  const skeletonCards = Array.from(new Array(itemsPerPage));

  return (
    <Box display="flex" flexWrap="wrap" gap={cssSpacings.s24}>
      {skeletonCards.map((_, index) => (
        <Box key={index} width={customWidth} height={customHeight}>
          <Skeleton
            variant="rectangular"
            width={322}
            height={314}
            sx={{ borderRadius: cssSpacings.s8 }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SkeletonCardView;
