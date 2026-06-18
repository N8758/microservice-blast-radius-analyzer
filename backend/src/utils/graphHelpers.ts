export const calculateSeverity = (
  blastRadius: number
) => {
  if (blastRadius <= 1) {
    return 25;
  }

  if (blastRadius <= 3) {
    return 50;
  }

  if (blastRadius <= 5) {
    return 75;
  }

  return 100;
};