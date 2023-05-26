import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import Button from "components/Button/Button";
import sam from "assets/images/sam_olu.png";
import mercy from "assets/images/mercy_gaga.png";
import logoIcon from "assets/icons/logo_primary.svg";
import burgerIcon from "assets/icons/burger_icon.svg";
import searchIcon from "assets/icons/search_icon.svg";
import bellIcon from "assets/icons/bell_icon.svg";
import NotificationButton from "components/Button/NotificationButton";
import ngnIcon from "assets/icons/ngn_flag.svg";
import samImg from "assets/images/sam_img.png";

import Input from "components/Input/Input";
import "./DashNavbar.scss";

const data = [
  {
    img: sam,
    name: "Sam Olu",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    time: "45 Mins Ago",
    status: <NotificationButton label="Unread" variant="unread"/>,
  },
  {
    img: mercy,
    name: "Mercy Gaga",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    time: "50 Mins Ago",
    status:  <NotificationButton label="Read" variant="read"/>,
  },
];

// const openNotification = () => {

//   notification.open({
//     message: "Notifications",
//     description: (
//       <div className="notification">
//         {data.map((notifications) => {
//           return (
//             <div className="cont">
//               <div className="img">
//                 <img src={notifications.img} alt="notification-thumbnail"/>
//               </div>
//               <div className="not">
//                 <h3>{notifications.name}</h3>
//                 <p className="description">{notifications.description}</p>
//                 <p className="time">{notifications.time}</p>
//               </div>
//               <p className="status">{notifications.status}</p>
//             </div>
//           );
//         })}
//         <div className="view-notification">
//         <a href="/dashboard/home/notification">VIEW ALL NOTIFICATIONS</a>
//         </div>
//       </div>
//     ),
//     duration: 600,
//     style: {
//       width: 420,
//       borderRadius: 10,
//       marginTop: 75,
//       marginRight: 95,
//       padding: 0,
//     },
//   });
// };

const DashNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="dash">
      <div className="dash-nav">
        <div className="nav nav-left">
          <Link to="/dashboard/home">
            <img className="logo-icon" src={logoIcon} alt="logoIcon" />
          </Link>
          <div className="dash-left">
            <img src={burgerIcon} className="burger-icon" alt="burgerIcon" />
            <Input
              type="text"
              label=""
              placeholder="Search"
              withFlag
              leftIcon={searchIcon}
            />
          </div>
        </div>
        <div className="dash-nav-right">
          {/* <img
            src={bellIcon}
            className="bell-icon"
            alt="bellIcon"
            onClick={openNotification}
          /> */}
          <div className="nav-profile" onClick={()=> navigate("/dashboard/home/profile")}>
            <img src={samImg} className="sam-img" alt="samImg" />
            <div className="nav-profile-details">
              <p>Sam Salazar</p>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
