export const handlePDV = (price: number) => {
  if (!price) return;
  const pdv = price * 0.17;
  const result = pdv + price;
  return result.toFixed(2);
};
