import star from "assets/icons/star.svg";
import "./RatedDevice.scss"
import {Rate, Progress} from 'antd';

const RatingStar = ({value, count5, count4, count3, count2, count1, percent5, percent4, percent3, percent2, percent1}:any) => {

    return(
    <>
    <div className="ratings-star">
        <div className="score">
            <p className="overall">Overall rating</p>
            <p className="value"> {value} &#x2044; 5</p>
            <Rate value={value} className="star" disabled />
        </div>
        <div className="ratings-breakdown">
            <p className="heading">Ratings breakdown</p>
            <ul>
                <li>5 <img src={star} alt="star-rating"/> ({count5}) <span><Progress percent={percent5} showInfo={false} strokeColor="green"/></span> </li>
                <li>4 <img src={star} alt="star-rating"/> ({count4}) <span><Progress percent={percent4} showInfo={false}strokeColor="blue"/></span> </li>
                <li>3 <img src={star} alt="star-rating"/> ({count3}) <span><Progress percent={percent3} showInfo={false} strokeColor="orange"/></span> </li>
                <li>2 <img src={star} alt="star-rating"/> ({count2}) <span><Progress percent={percent2} showInfo={false} strokeColor="orange"/></span> </li>
                <li>1 <img src={star} alt="star-rating"/> ({count1}) <span><Progress percent={percent1} showInfo={false} strokeColor="orange"/></span> </li>
            </ul>
            <p></p>
        </div>
    </div>
    </>

    )
}

export default RatingStar;