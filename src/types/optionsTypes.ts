export interface selectOptionsType {
  value: string;
  label: string;
}

export interface autocompleteOptionsType extends selectOptionsType {
  avatar?: string;
  endText?: string;
}
