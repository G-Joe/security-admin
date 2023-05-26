import { useState } from "react";
import { Table } from "antd";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Dropdown from "components/Dropodown/Dropdown";
import useDisclosure from "components/Modal/useDisclosure";
import ConfirmModal from "components/Modal/ConfirmModal";
import StatusModal from "components/Modal/StatusModal";
import AppleCharger from "assets/images/apple_charger.png";
import Naira from "assets/icons/naira_small.svg";
import Dell from "assets/images/dell_xps.png";
import LaptopCharger from "assets/images/laptop_charger.png";
import Samsung from "assets/images/samsung_22.png";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Select from "components/Input/Select";
import searchIcon from "assets/icons/search_icon.svg";
import "./Admin.scss";

const OxygenAdmin = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      sorter: {
        compare: (a: any, b: any) => a.sn - b.sn,
        multiple: 7,
      },
    },
    {
      title: "Date Created",
      dataIndex: "date",
      sorter: {
        compare: (a: any, b: any) => a.date - b.date,
        multiple: 6,
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 5,
      },
    },
    {
      title: "Group",
      dataIndex: "group",
      sorter: {
        compare: (a: any, b: any) => a.group - b.group,
        multiple: 4,
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: {
        compare: (a: any, b: any) => a.role - b.role,
        multiple: 3,
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: {
        compare: (a: any, b: any) => a.status - b.status,
        multiple: 2,
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: {
        compare: (a: any, b: any) => a.email - b.email,
        multiple: 2,
      },
    },
    {
      title: "Edit",
      dataIndex: "Edit",
      sorter: {
        compare: (a: any, b: any) => a.view - b.view,
        multiple: 1,
      },
      render: () => (
        <div onClick={() => setModalOpen(true)}>
          <p style={{ cursor: "pointer" }}>Edit</p>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sn: "1",
      date: "1/2/2023",
      name: "Sam Ohio",
      group: "Risk Admin Supervisor",
      role:"Risk Admin Supervisor",
      status: "Active",
      email: "sam@accessplc.com"
    },
    {
      key: "2",
      sn: "2",
      date: "2/2/2023",
      name: "Monsor Musa",
      group: "Business and Product Admin",
      role:"Business and Product Admin",
      status: "Active",
      email: "musa@accessplc.com"
    },
    {
      key: "3",
      sn: "3",
      date: "3/2/2023",
      name: "King Paul",
      group: "Marketing Admin",
      role:"Marketing Admin Supervisor",
      status: "Active",
      email: "paul@accessplc.com"
    },
    {
      key: "4",
      sn: "4",
      date: "4/2/2023",
      name: "Joy Smart",
      group: "Finance Admin",
      role:"Finance Admin",
      status: "Disabled",
      email: "joy@accessplc.com"
    },
  ];

  const onChange = ({ pagination, filters, sorter, extra }: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const statusModal = useDisclosure();
  const confirmModal = useDisclosure();

  const SuccessModal = () => {
    setModalOpen(false);
    statusModal.onOpen();
  };

  const Deactivate = () => {
    setModalOpen(false);
  };
  const onSelectChange = ({ newSelectedRowKeys }: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="ratings">
      <div className="header">
        <h3>Oxygen Admins</h3>
        <div className="action">
          <Button variant="transparent" label="EXPORT AS CSV" />
        </div>
      </div>
      <div className="outlet-table">
        <div className="filter">
          <div className="search">
            <Input
              type="text"
              label=""
              placeholder="Search"
              withFlag
              leftIcon={searchIcon}
            />
          </div>
          <div className="date">
            <Input label="" type="date" placeholder="Select Date" />
          </div>
          <Button label="FILTER" variant="orange" />
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </div>
      <div className="modal">
        <Modal
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          className="inventory-modal"
          style={{
            top: 0,
            maxWidth:348,
            height: 596,
            borderRadius:3,
            marginRight:0,
          }}
        >
          <h3>Edit Admin</h3>
          <br />
            <Input label="Name"type="text" placeholder="Sam Oshio" readonly={true}/><br/>
            <Input label="Group" type="text" placeholder="Risk Admin"readonly={true}/><br/>
            <Input label="Email" type="text" placeholder="sam@accessbankplc.com" readonly={true}/><br/>
            <Input label="Role" type="text" placeholder="Risk Admin Supervisor" readonly={true}/><br/>
            <Select
     options={["Active"]}
     onOptionSelected={handleOptionSelected}
     label="Status"/>
              <br />
            <br />
          <div className="edit-submit">
            <Button label="UPDATE" variant="primary" onClick={SuccessModal} />
            <Button
              label="CLOSE"
              variant="secondary"
              onClick={Deactivate}
            />
          </div>
        </Modal>
      </div>
      <StatusModal
        status="success"
        title="Successful"
        message="your update has been made"
        duration={6000}
        isOpen={statusModal.isOpen}
        onClose={statusModal.onClose}
      />
      <ConfirmModal
        question2="You are about to deactivate this product, please note that this product will not be visible to the users for pick up once deactivated. Are you sure you want to carry out this action?"
        confirmSuccessMessage="Product Deactivated"
        isOpen={confirmModal.isOpen}
        onClose={confirmModal.onClose}
      />
    </div>
  );
};

export default OxygenAdmin;
