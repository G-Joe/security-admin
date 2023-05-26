import useDisclosure from "components/Modal/useDisclosure";

const useLoader = () => {
  const { isOpen: isLoading, onOpen: start, onClose: end } = useDisclosure();

  return { isLoading, start, end };
};

export default useLoader;
