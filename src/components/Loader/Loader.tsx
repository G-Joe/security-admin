import { Modal } from "antd";
import loader from "assets/icons/loader.gif";
import "./Loader.scss";

type Props = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
  return (
    <Modal open={isLoading} className="loader" centered>
      <img src={loader} alt="gif-loader" />
    </Modal>
  );
};

export default Loader;
