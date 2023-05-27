import fraud from "assets/icons/fraud.svg";
import operations from "assets/icons/operations.svg";
import "./home.scss"


const data = [
    {
      img: fraud,
      status: "Fraud",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      time: "45",
      name: "Ola Dio",
    },
    {
      img: operations,
      status: "Operations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      time: "50",
      name: "Sam Cook",
    },
    {
        img: fraud,
        status: "Fraud",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        time: "45",
        name: "Emma Dio",
      },
      {
        img: operations,
        status: "Operations",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        time: "50",
        name: "Joy Smart",
      },
  ];

const Notification = () => {
  return (
    <div className="notification-page">
      <h3>
        Home &gt; <span>Notification</span>
      </h3>
      <div className="notification-page-content">
      {data.map((notifications) => {
          return (
            <div className="cont">
              <div className="img">
                <img src={notifications.img} alt="notification-thumbnail"/>
              </div>
              <div className="not">
                <h3>{notifications.status}</h3>
                <p className="description">{notifications.description}</p>
                <p className="name">Reported by {notifications.name}</p>
              </div>
              <div className="time">
                <p>{notifications.time} Mins Ago</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
