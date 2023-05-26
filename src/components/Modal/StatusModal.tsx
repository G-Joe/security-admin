import { useEffect } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

import successIcon from "assets/icons/success.gif";
import failedIcon from "assets/icons/error.gif";
import cancelIcon from "assets/icons/cancel_icon.svg";
import "./Modal.scss";

type Props = {
  status: "success" | "failed";
  title: string;
  title2?: string;
  text?: string;
  text2?: string;
  message?: string;
  duration?: number;
  to?: string;
  isOpen: boolean;
  onClose: () => void;
};

const StatusModal = ({
  status,
  title,
  title2,
  text,
  text2,
  message,
  duration = 3000,
  to,
  isOpen,
  onClose,
}: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        handleClose();
      }, duration);
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    to && navigate(to);
  };

  return (
    <Modal open={isOpen} centered>
      <div className="modal modal-status">
        <img
          className="status-img"
          src={status === "success" ? successIcon : failedIcon}
          alt="successIcon"
        />
        <h3>{title}</h3>
        <h3 className="amount"><span>{title2}</span><br/>{text}</h3>
        <p className="text2">{text2}</p>

        {message && <p>{message}</p>}

        <img
          className="close-icon"
          onClick={handleClose}
          src={cancelIcon}
          alt="cancelIcon"
        />
      </div>
    </Modal>
  );
};

export default StatusModal;
