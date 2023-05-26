import "./Card.scss";

type Props = {
    label: string;
    count: string;
    icon: any;
    background: string;
};

const Card = ({label, count, icon, background}:Props) => {
    return (
        <div className={`summary summary-${background}`}>
            <h1>{label}</h1>
            <div className="bottom">
            <h3>{count}</h3>
            <img src={icon} alt="card-icon"/>
            </div>

        </div>
    );
};

export default Card;