import appStoreBadgeImg from "assets/icons/app_store_badge.svg";
import googleStoreBadgeImg from "assets/icons/google_store_badge.svg";

import "./StoreBadge.scss";

const StoreBadge = () => {
  return (
    <div className="store-badge">
      <img src={appStoreBadgeImg} alt="appStoreBadgeImg" />
      <img src={googleStoreBadgeImg} alt="googleStoreBadgeImg" />
    </div>
  );
};

export default StoreBadge;
