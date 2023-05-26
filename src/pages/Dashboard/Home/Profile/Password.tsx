import StatusModal from "components/Modal/StatusModal";
import useDisclosure from "components/Modal/useDisclosure";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import "./profile.scss"

const ProfilePassword = () => {
    const statusModal = useDisclosure();
    return (
        <div className="view-profile">
            <Input label="Old Password" type="password" secure/><br/>
            <Input label="New Password" type="password" secure/><br/>
            <Input label="Confirm Password" type="password" secure/><br/>
            <div className="action-button">
                    <Button label="UPDATE" variant="primary" onClick={statusModal.onOpen}/>
                    <Button label="CANCEL" variant="secondary"/>
                </div>
                <StatusModal
            status="success"
            title="Successful"
            message="Your password has been changed"
            duration={6000}
            isOpen={statusModal.isOpen}
            onClose={statusModal.onClose}
          />
        </div>
    )
}

export default ProfilePassword;