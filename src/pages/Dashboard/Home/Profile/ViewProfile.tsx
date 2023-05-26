import StatusModal from "components/Modal/StatusModal";
import useDisclosure from "components/Modal/useDisclosure";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import "./profile.scss"

const ViewProfile = () => {
    const statusModal = useDisclosure();
    return (
        <div className="view-profile">
                <Input label="First Name" type="text"/><br/>
                <Input label="Last Name" type="text"/><br/>
                <Input label="Email" type="email"/><br/>
                <Input label="Phone Number" type="text"/><br/>
                <div className="action-button">
                    <Button label="UPDATE" variant="primary" onClick={statusModal.onOpen}/>
                    <Button label="CANCEL" variant="secondary"/>
                </div>
                <StatusModal
            status="success"
            title="Successful"
            message="Your profile update was successful"
            duration={6000}
            isOpen={statusModal.isOpen}
            onClose={statusModal.onClose}
          />
        </div>
    )
}

export default ViewProfile;