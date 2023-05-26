import img from "assets/images/profile_image.png";
import camera from "assets/icons/camera_icon.svg";
import "./profile.scss"

const ProfileImage = () => {
    return (
        <div className="profile-image">
            <div className="img">
            <img src={img} alt="profile-img"/>
            <img src={camera} alt="camera-icon" className="camera-icon"/>
            </div>
            <h1>Sam Salazar</h1>
            <p>Security Admin</p>
        </div>
    )
}


export default ProfileImage;