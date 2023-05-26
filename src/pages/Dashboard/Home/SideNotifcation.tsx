import fraud from "assets/icons/fraud.svg";
import operations from "assets/icons/operations.svg";
import "./home.scss";

const data = [
  {
    img: fraud,
    title: "Fraud",
    time: "1 Mins Ago",
    content: "Lorem Ipsum has been the industry's standard dummy",
  },
  {
    img: operations,
    title: "Operations",
    time: "1 Mins Ago",
    content: "Lorem Ipsum has been the industry's standard dummy",
  },
  {
    img: fraud,
    title: "Fraud",
    time: "1 Mins Ago",
    content: "Lorem Ipsum has been the industry's standard dummy",
  },
  {
    img: operations,
    title: "Operations",
    time: "1 Mins Ago",
    content: "Lorem Ipsum has been the industry's standard dummy",
  },
];

const SideNotification = () => {
  return (
    <div className="side-notification">
        <h1>Notifications</h1>
      {data.map((notify) => (
        <div className="notifications">
          <img
            src={notify.img}
            className="notification-icon"
            alt="notification icon"
          />
          <div className="right">
            <div className="header">
              <h3>{notify.title}</h3>
              <p>{notify.time}</p>
            </div>
            <p>{notify.content}</p>
          </div>
        </div>
      ))}
      <div className="view-notification">
        <a href="/dashboard/home/notification">VIEW ALL NOTIFICATIONS</a>
      </div>
    </div>
  );
};

export default SideNotification;
