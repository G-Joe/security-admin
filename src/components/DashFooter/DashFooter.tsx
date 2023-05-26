import StoreBadge from "components/StoreBadge/StoreBadge";
import "./DashFooter.scss";

const DashFooter = () => {
  return (
    <footer>
      <div className="dash-footer">
        <b>Copyright © 2022 Oxygen. </b>All rights reserved.
      </div>
      <StoreBadge />
    </footer>
  );
};

export default DashFooter;
