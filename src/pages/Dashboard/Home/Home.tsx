import { useState } from "react";
import CylinderChart from "./CylinderChart";
import Select from "components/Input/Select";
import Card from "components/Summary/Card";
import Request from "assets/icons/request.svg";
import People from "assets/icons/people.svg";
import Three from "assets/icons/three_people.svg";
import NewAdmins from "./NewAdmins";
import Requests from "./Request";
import SideNotification from "./SideNotifcation";
import "./home.scss";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="top">
        <div className="status">
          <div className="cards">
            <Card
              label="Request"
              count="20"
              icon={Request}
              background="purple"
            />
            <Card
              label="Active Admins"
              count="20"
              icon={People}
              background="blue"
            />
            <Card label="Groups" count="20" icon={Three} background="green" />
          </div>
          <div className="bar-chart">
            <div className="title">
              <h1>Permission</h1>
              <div className="select">
              <Select
                options={["Last week", "Last month", "Last year"]}
                onOptionSelected={handleOptionSelected}
                label=""
              />
              </div>
             
            </div>
            <div className="cylinder">
            <CylinderChart/>
            </div>

          </div>
        </div>
        <div className="side">
          <SideNotification />
        </div>
      </div>
      <div className="admins">
        <div className="heading">
          <h3>Oxygen Admins</h3>
          <h3 className="view">View All</h3>
        </div>
        <br />
        <NewAdmins />
      </div>
      <br />
      <div className="admins">
        <div className="heading">
          <h3>Requests</h3>
          <h3 className="view">View All</h3>
        </div>
        <br />
        <Requests />
      </div>
    </>
  );
};

export default Home;
