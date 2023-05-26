import { Modal } from "antd";
import cancelIcon from "assets/icons/cancel_icon.svg";
import confirmIcon from "assets/icons/confirm.gif";
import Button from "components/Button/Button";
import StatusModal from "components/Modal/StatusModal";
import useDisclosure from "./useDisclosure";

type Props = {
  question?: string;
  question2?: string;
  isOpen: boolean;
  onClose: () => void;
  confirmSuccessMessage: string;
};

const ConfirmModal = ({
  question,
  question2,
  isOpen,
  onClose,
  confirmSuccessMessage,
}: Props) => {
  const confirmSuccessModal = useDisclosure();

  return (
    <>
      <Modal open={isOpen} centered>
        <div className="modal modal-status">
          <img className="status-img" src={confirmIcon} alt="successIcon" />
          <p className="confirm-text">{question}</p>
          <p className="question-2">{question2}</p>
          <div className="btn-confirm">
            <Button
              variant="primary"
              label="YES"
              onClick={() => {
                confirmSuccessModal.onOpen();
                onClose();
              }}
            />
            <Button variant="transparent" label="NO" onClick={onClose} />
          </div>
          <img
            className="close-icon"
            onClick={onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
      <StatusModal
        status="success"
        title={confirmSuccessMessage}
        duration={6000}
        isOpen={confirmSuccessModal.isOpen}
        onClose={confirmSuccessModal.onClose}
      />
    </>
  );
};

export default ConfirmModal;
