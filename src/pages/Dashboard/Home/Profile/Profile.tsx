import {Tabs} from "antd";
import ProfileImg from "./ProfileImg";
import ViewProfile from "./ViewProfile";
import Password from "./Password"
import "./profile.scss"

const onChange = ({ key }: any) => {
  console.log(key);
};

const items = [
  {
    key:"1",
    label:"View Profile",
    children:<ViewProfile/>,
  },
  {
    key:"2",
    label:"Change Password",
    children:<Password/>,
  },

]

const Profile = () => {

  
  return (
    <div className="profile">
      <h3>
        Home &gt; <span>Notification</span>
      </h3>
      <div className="profile-content">
        <div className="profile-img">
          <ProfileImg/>
        </div><br/>
       
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
     
      </div>
    </div>
  );
};

export default Profile;
