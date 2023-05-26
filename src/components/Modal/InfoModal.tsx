import { Modal } from "antd";
import cancelIcon from "assets/icons/cancel_icon.svg";
import confirmIcon from "assets/icons/confirm.gif";
import Button from "components/Button/Button";
import useDisclosure from "./useDisclosure";

type Props = {
  title?: string;
  info: string;
  isOpen: boolean;
  onClose?: () => void;
  onInfoButtonClick?: () => void;
  buttonText?: string;
};

const InfoModal = ({
  title,
  info,
  isOpen,
  onClose,
  onInfoButtonClick,
  buttonText,
}: Props) => {
  return (
    <>
      <Modal open={isOpen} centered>
        <div className="modal modal-status">
          <img className="status-img" src={confirmIcon} alt="successIcon" />
          <h3 className="info-title">{title}</h3>
          <p className="info-text">{info}</p>
          {buttonText && (
            <div className="btn-info">
              <Button
                variant="primary"
                label={buttonText}
                onClick={onInfoButtonClick}
              />
            </div>
          )}

          <img
            className="close-icon"
            onClick={onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
    </>
  );
};

export default InfoModal;
