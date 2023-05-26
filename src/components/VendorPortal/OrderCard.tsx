import "./OrderCard.scss";

type Props = {
    title: string;
    status: string;
    icon: string;
}

const OrderCard = ({title, status, icon}: Props) => {
    return (
        <div className="order-card">
            <h3>{title}</h3>
            <div className="bottom">
                <p>{status}</p>
                <img src={icon} alt="order-icon"/>
            </div>
        </div>
    )
}

export default OrderCard;