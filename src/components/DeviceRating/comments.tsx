import {Rate} from 'antd';
import Input from 'components/Input/Input';
import "./RatedDevice.scss"

const Comments = ({profilePic, name, rating, comment, timeline}:any) => {
    return(
        <div className="comments">
            <div className="left">
                <img src={profilePic} alt=""/>
            </div>
            <div className="right">
                <div className="name">
                    <p>{name} <br/> <Rate value={rating} disabled className='star'/></p>
                    <p>{timeline}</p>
                </div>
                <p className="review">{comment}</p><br/>
                <Input label="Reply" type="text"/>
            </div>
        </div>
    )
}

export default Comments;