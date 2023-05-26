import "./Button.scss";

const NotificationButton = ({label, variant,}:any) => {
    return(
        <button className={`notify btn-${variant}`}>
            {label}
        </button>
    )
}

export default NotificationButton;