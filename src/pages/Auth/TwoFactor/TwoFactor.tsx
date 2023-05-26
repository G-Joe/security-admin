import { Link, useNavigate } from "react-router-dom";
import { Progress, Radio, Space } from "antd";
import { useState } from "react";
import { FormEvent } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import LoginImg from "assets/icons/vendor_login.svg";
import "./TwoFactor.scss";

const TwoFactor = () => {
  const [value, setValue] = useState(0);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const Authenticate = () => {
    if (value == 1) {
        setContent("In this method, you need to scan the QR code from the Google Authenticator App. This App will provide the 6 digit OTP token to complete the authentication process")
      return <Button label="PROCEED" variant="primary" onClick={()=> navigate("/google-two-factor")}/>;
    } else if (value === 2) {
        setContent("")
      return <Button label="PROCEED" variant="primary" onClick={()=> navigate("/microsoft-two-factor")}/>;
    } else {
      return <p></p>;
    }
  };

  return (
    <div className="landing">
      <div className="right">
        <div className="form">
          <form className="signin">
            <div className="form-left">
              <img src={LoginImg} alt="login-img" />
            </div>
            <div className="form-right">
              <h2 className="welcome-header">2 Factor Authentication</h2>
              <p className="two-factor-instruction">
                Please select a two Factor Authentication method to complete
                registration
              </p>
              <div className="radio-selection">
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <div className="radio">
                      <Radio value={1}>Google Authenticator </Radio>
                    </div>
                    <div className="radio">
                      <Radio value={2}>Microsoft Authenticator</Radio>
                    </div>
                  </Space>
                </Radio.Group>
              </div>
              <p className="auth-instruction">{content}</p>
              <Authenticate />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TwoFactor;
