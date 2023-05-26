import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ options, onOptionSelected, label }: any) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [labelStyle, setLabelStyle] = useState("#484646");
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleDropdownClicked = () => {
    setToggleDropdown((prev) => !prev);
  };

  const handleDropdownClosed = () => {
    setToggleDropdown(false);
  };

  const handleOptionClicked = (option: string) => {
    onOptionSelected(option);
    setSelectedOption(option);
  };

  return (
    <div
      className="dropdown"
      tabIndex={0}
      onBlur={handleDropdownClosed}
      onClick={handleDropdownClicked}
      onFocus={() => setLabelStyle("#2bd9c7")}
    >
      <div className="select">
        <span style={{ color: labelStyle }} >{label}</span>
        <label>{selectedOption}</label>
      </div>
      {toggleDropdown && options?.length ? (
        <ul className="dropdown-list" >
          <div className="dotted">
            {options?.map((option: string, i: number) => (
              <li key={i} onClick={() => handleOptionClicked(option)}>
                {option}
              </li>
            ))}
          </div>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;