// import { useState } from "react";
// import "./Input.scss";

// type InputProps = {
//   label: string;
//   children: React.ReactNode;
//   style?: any;
//   onChange?: any;
//   onChangeCapture?: any;
// };

// const Select = (props: InputProps) => {
//   const [labelStyle, setLabelStyle] = useState("#484646");
//   const { label, children, style, onChange, onChangeCapture } = props;

//   return (
//     <div className="form-group" style={style}>
//       <label style={{ color: labelStyle }} className="capitalize">
//         {label}
//       </label>
//       <div className="input-wrapper select">
//         <select
//           onFocus={() => setLabelStyle("#2bd9c7")}
//           onBlur={() => setLabelStyle("#484646")}
//           onChange={onChange}
//           onChangeCapture={onChangeCapture}
//         >
//           {children}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Select;

import { useState } from "react";
import "./select.scss";

const Select = ({ options, onOptionSelected, label }: any) => {
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
        <span  >{label}</span>
        {/* Style for span above style={{ color: labelStyle }} */}
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

export default Select;
