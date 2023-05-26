import { useRef, useEffect} from 'react';

  const MetaButton = () => {
  const buttonRef = useRef(null);
  const clientID = import.meta.env.VITE_CLIENTID
  const flowID = import.meta.env.VITE_FLOWID;
  

  useEffect(() => {
    if (buttonRef.current) {
    }
  }, [buttonRef]);

  return (

    <>
    <MetaButton />
    
    </>
  );
}

export default MetaButton;