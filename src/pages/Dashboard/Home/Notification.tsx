import sam from "assets/images/sam_olu.png";
import mercy from "assets/images/mercy_gaga.png";
import "./home.scss"


const data = [
    {
      img: sam,
      name: "Sam Olu",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      time: "45 Mins Ago",
    },
    {
      img: mercy,
      name: "Mercy Gaga",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      time: "50 Mins Ago",
    },
    {
        img: sam,
        name: "Sam Olu",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        time: "45 Mins Ago",
      },
      {
        img: mercy,
        name: "Mercy Gaga",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        time: "50 Mins Ago",
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
                <h3>{notifications.name}</h3>
                <p className="description">{notifications.description}</p>
                <p className="time">{notifications.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
