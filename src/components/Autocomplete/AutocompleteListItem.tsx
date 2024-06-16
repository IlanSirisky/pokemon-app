import { AutocompleteOptionsType } from "../../types/optionsTypes";
import { Box } from "@mui/material";
import { AvatarLabelContainer, endTextStyle, listItemSyles } from "./styles";
import Avatar from "../Avatar/Avatar";

interface AutocompleteListItemProps {
  option: AutocompleteOptionsType;
  props: React.HTMLAttributes<HTMLLIElement>;
}

const AutocompleteListItem = ({ option, props }: AutocompleteListItemProps) => {
  return (
    <Box component="li" {...props} sx={listItemSyles} key={option.value}>
      <AvatarLabelContainer>
        {option.avatar && (
          <Avatar image={option.avatar} alt={`${option.value}`} />
        )}
        {option.label}
      </AvatarLabelContainer>
      {option.endText ? <Box sx={endTextStyle}>{option.endText}</Box> : null}
    </Box>
  );
};

export default AutocompleteListItem;
