import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import {
  DataCellWrapper,
  customTooltipStyles,
} from "../../../components/Table/styles";
import { BodyRegular } from "../../../styles/typography";
import { IPokemonData } from "../../../types/pokemonTypes";

interface PokemonDescTableCellProps {
  row: IPokemonData;
}

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} placement="top-start" arrow />
))({
  [`& .${tooltipClasses.tooltip}`]: { ...customTooltipStyles },
});

const PokemonDescTableCell = ({ row }: PokemonDescTableCellProps) => {
  return (
    <DataCellWrapper>
      <CustomWidthTooltip title={row.description}>
        <BodyRegular>{row.description}</BodyRegular>
      </CustomWidthTooltip>
    </DataCellWrapper>
  );
};

export default PokemonDescTableCell;
