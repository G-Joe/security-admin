import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import Button from "components/Button/Button";
import LoginImg from "assets/icons/vendor_login.svg";
import useDisclosure from "components/Modal/useDisclosure";
import InfoModal from "components/Modal/InfoModal";
import "./EnterOtp.scss";

const MicrosoftEnterOtp = () => {
  const [otp, setOtp] = useState("");
  const infoModal = useDisclosure();
  const navigate = useNavigate();

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    infoModal.onOpen();
  };

  const infoClose = () => {
    infoModal.onClose();
    navigate("/dashboard/home")
}

  return (
  
      <div className="landing">
        <div className="right">
          <div className="form">
            <form className="signin" onSubmit={handleVerify}>
              <div className="form-left">
                <img src={LoginImg} alt="login-img" />
              </div>
              <div className="form-right">
                <h2 className="welcome-header">Verify your Identity</h2>
                <p className="two-factor-instruction">
                  Please enter the 6 digit code generated on your Microsoft
                  Authenticator App
                </p>
                  <div className="otp">
                    <label>Code</label>
                    <OtpInput
                      value={otp}
                      onChange={handleOtpChange}
                      numInputs={6}
                      inputStyle={`otp-input ${
                        otp.length > 5 ? "otp-input-active" : ""
                      }`}
                      isInputNum
                      containerStyle={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      isInputSecure
                    />
                  </div>
                  <Button
                    label="VERIFY"
                    variant={otp.length < 6 ? "disabled" : "primary"}
                    // onClick={(e:any)=>handleVerify(e)}
                  />
                </div>
            </form>
          </div>
        </div>
        <InfoModal
        info="Login is successful, please note
        that the back up codes are for
        device login access and should
        be kept safely."
        isOpen={infoModal.isOpen}
        onClose={infoClose}
       
      />
      </div>

     
  
  );
};

export default MicrosoftEnterOtp;
