import { Link, useNavigate } from "react-router-dom";
import { Progress, Modal } from "antd";
import { FormEvent } from "react";
import InfoModal from "components/Modal/InfoModal";
import useDisclosure from "components/Modal/useDisclosure";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import LoginImg from "assets/icons/vendor_login.svg";
import "./SignIn.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const infoModal = useDisclosure();
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    infoModal.onOpen();
  };

  return (
    <div className="landing">
      <div className="right">
        <div className="form">
          <form className="signin" onSubmit={onSubmit}>
            <div className="form-left">
              <img src={LoginImg} alt="login-img" />
            </div>
            <div className="form-right">
              <h2 className="welcome-header">Welcome Back!</h2>
              <Input label="Email" type="text" />
              <Input label="Password" type="password" secure />
              <Link to="/forgot-pin">
                <p className="forgot-text"> Forgot Password</p>
              </Link>
              <Progress percent={50} showInfo={false} strokeColor="#B00020" />
              <p className="progress-status">
                weak, must contain at least 8 characters
              </p>
              <Button label="LOGIN" variant="primary" />
            </div>
          </form>
        </div>
      </div>
      <InfoModal
        info="You are required to change your password"
        buttonText="CHANGE PASSWORD"
        isOpen={infoModal.isOpen}
        onClose={infoModal.onClose}
        onInfoButtonClick={() => {
          infoModal.onClose();
          navigate("/change-password");
        }}
      />
    </div>
  );
};

export default SignIn;
