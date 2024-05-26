export interface SelectOptionsType {
  value: string;
  label: string;
}

export interface AutocompleteOptionsType extends SelectOptionsType {
  avatar?: string;
  endText?: string;
}
