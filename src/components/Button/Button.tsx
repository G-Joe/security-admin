import "./Button.scss";

type Props = {
  label: string;
  variant: string;
  onClick?: () => void;
  btnIcon?: string;
  size?: string;
  disabled?: any;
};

const Button = ({ label, variant, disabled, size = "lg", btnIcon, onClick }: Props) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick} disabled = {disabled}>
      {btnIcon && <img className="edit-icon" src={btnIcon} alt="btnIcon" />}
      {label}
    </button>
  );
};

export default Button;
