export const getVAT = (subtotal: number, vatRate: number) => {
  return (vatRate * subtotal) / 100;
};
