const SelectButton = ({ setDays, numOfDays, day }) => {
  return (
    <button
      className={day === numOfDays ? "active" : ""}
      onClick={() => setDays(numOfDays)}
    >
      {numOfDays === 365 ? "1 yr" : `${numOfDays} days`}
    </button>
  );
};

export default SelectButton;
