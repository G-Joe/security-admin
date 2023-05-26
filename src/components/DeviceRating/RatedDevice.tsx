import star from "assets/icons/star_gold_icon.svg";
import "./RatedDevice.scss"

const RatedDevice = ({phone, title, price, rating, count}:any) => {
    return (
        <div className="rating">
            <div className="left">
                <img src={phone} alt="phone"/>
            </div>
            <div className="right">
                <h3>{title}</h3>
                <div className="bottom">
                    <h3>{price}</h3>
                    <h4><img src={star} alt="star"/> <span>{rating}</span>({count} Reviews )</h4>
                </div>
            </div>
        </div>
    )
}

export default RatedDevice;