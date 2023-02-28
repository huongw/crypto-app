export default function formatNumber(currency) {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(currency);

  return formattedNumber;
}
