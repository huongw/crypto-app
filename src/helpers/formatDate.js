export default function formatDate(data) {
  const date = new Date(data);
  const month = date.toLocaleString("default", { month: "long" }); // get the full month name
  const day = date.getDate(); // get the day of the month (1-31)
  const formattedDate = `${month} ${day}`; // combine the month name and day into a string
  return formattedDate;
}