export const getNestedValue = (obj: any, path: string): any => {
  return path.split(".").reduce((o, p) => (o ? o[p] : undefined), obj);
};
