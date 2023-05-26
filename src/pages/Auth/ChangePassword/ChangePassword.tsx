import { Link, useNavigate} from "react-router-dom";
import {Progress, Modal} from "antd";
import { useState } from 'react';
import { FormEvent } from "react";
import InfoModal from "components/Modal/InfoModal";
import useDisclosure from "components/Modal/useDisclosure";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import LoginImg from "assets/icons/vendor_login.svg"
import "./ChangePassword.scss";

const ChangePassword = () => {
  const navigate = useNavigate();
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
      navigate("/two-factor-authentication")
  };

  return (
    <div className="landing">
      {/* <div className="left"></div> */}
      <div className="right">
        <div className="form">
          <form className="signin" onSubmit={onSubmit}>
            <div className="form-left">
                <img src={LoginImg} alt="login-img"/>
            </div>
            <div className="form-right">
            <h2 className="welcome-header">Change Password</h2>
            <Input label="New Password" type="password" secure/>
            <Input label="Confirm Password" type="password" secure/>
            <Link to="/forgot-pin">
              <p className="forgot-text"> Forgot PIN</p>
            </Link>
            <Progress percent={50} showInfo={false} strokeColor="#B00020" />
            <p className="progress-status">weak, must contain at least 8 characters</p>
            <Button
              label="CHANGE PASSWORD"
              variant="primary"
            />
            </div>
         
          </form>
         
        </div>
        </div>
    </div>
  );
};

export default ChangePassword;
