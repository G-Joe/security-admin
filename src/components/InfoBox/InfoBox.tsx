import { useState } from "react";
import arrowUpIcon from "assets/icons/arrow_up.svg";
import arrowDownIcon from "assets/icons/arrow_down.svg";
import Button from "components/Button/Button";

import "./InfoBox.scss";

type Props = {
  label: string;
  onClick: () => void;
  items: string[];
};

const InfoBox = ({ label, items, onClick }: Props) => {
  const [open, setOpen] = useState(false);
  const [arrow, setArrow] = useState(arrowDownIcon)
  const Action = () => {
    if (open === false){
      setOpen(!open)
      setArrow(arrowUpIcon)
    }else{
      setOpen(!open)
      setArrow(arrowDownIcon)
    }
  };

  return (
    <div className="infobox" onClick={Action}>
      <div className="header">
        <p>{label}</p>
        <img src={arrow} alt="arrowDownIcon" />
      </div>

      {open && (
        <>
          <div className="infobox-details">
            <hr />
            {items.map((item, i) => (
              <div key={i} className="infobox-details-row">
                <div className="infobox-details-circle"></div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <Button variant="transparent" label="PROCEED" onClick={onClick} />
        </>
      )}
    </div>
  );
};

export default InfoBox;
