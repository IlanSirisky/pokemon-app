export const calculateHealthPercentage = (
  healthStatus: number,
  maxHealth: number
): number => {
  return (+healthStatus / maxHealth) * 100;
};
