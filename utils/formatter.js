export const toCurrency = (value) => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}