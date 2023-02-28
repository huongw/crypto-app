import React from "react";
import classNames from "classnames";

const SelectButton = ({ setDays, numOfDays, day }) => {
  const handleButtonChange = () => {
    setDays(numOfDays)
  }

  const buttonClass = classNames({
    "active": day === numOfDays
  })

  return <button className={buttonClass} onClick={handleButtonChange}>{numOfDays} days</button>;
};

export default SelectButton;
