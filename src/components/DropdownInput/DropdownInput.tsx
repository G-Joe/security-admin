import { useState } from "react";
import Input from "components/Input/Input";
import Dropdown from "assets/icons/dropdown.svg";

import "./DropdownInput.scss";


type Props = {
  title?: string;
  options: {
    index: string;
    question: string;
  }[];
  value?: string;
  onChange?: () => void;
  
};

const DropdownInput = ({ title, options, value, onChange }: Props) => {
  const [selectedOption, setSelectedOption] = useState("0");

  return (
    <div className="select-wrapper">
      <select
        className="select-dropdown"
        onChange={(e) => setSelectedOption(e.target.value)}
        value={selectedOption}
      >
        <option value="0">{title}</option>
        {options.map((item) => (
          <option value={item.index}>{item.question}</option>
        ))}
      </select>
     <img src={Dropdown} alt="" className="dropdown" />
      {selectedOption === "0" ? null : (
        <Input label="Answer" type="text" value={value} onChange={onChange} />
      )}
    </div>
  );
};

export default DropdownInput;
