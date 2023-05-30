import { useState } from "react";
import { Table } from "antd";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import useDisclosure from "components/Modal/useDisclosure";
import ConfirmModal from "components/Modal/ConfirmModal";
import StatusModal from "components/Modal/StatusModal";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import searchIcon from "assets/icons/search_icon.svg";
import adminLogin from "assets/icons/admin_login.svg";
import "../Audit.scss";

const AdminAuditTrail = () => {
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
      title: "Timestamp",
      dataIndex: "timestamp",
      sorter: {
        compare: (a: any, b: any) => a.timestamp - b.timestamp,
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
      title: "User ID",
      dataIndex: "id",
      sorter: {
        compare: (a: any, b: any) => a.id - b.id,
        multiple: 5,
      },
    },
    {
      title: "Source IP",
      dataIndex: "source",
      sorter: {
        compare: (a: any, b: any) => a.source - b.source,
        multiple: 4,
      },
    },
    {
      title: "Action/Event",
      dataIndex: "action",
      sorter: {
        compare: (a: any, b: any) => a.group - b.group,
        multiple: 3,
      },
    },
    {
      title: "Respond",
      dataIndex: "Respond",
      sorter: {
        compare: (a: any, b: any) => a.view - b.view,
        multiple: 1,
      },
      render: () => (
        <div onClick={() => setModal2Open(true)}>
          <p style={{ cursor: "pointer" }}>View</p>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sn: "1",
      timestamp: "1/2/2023 - 9:00am",
      name: "Sam Duke",
      id: "FC123456",
      source: "192.168.10.3",
      action: "Updated",
    },
    {
      key: "2",
      sn: "2",
      timestamp: "2/2/2023 - 9:00am",
      name: "Ola Olu",
      id: "FC123452",
      source: "192.168.10.3",
      action: "Delete",
    },
    {
      key: "3",
      sn: "3",
      timestamp: "3/2/2023 - 9:00am",
      name: "Nosa Osas",
      id: "FC123450",
      source: "192.168.1.3",
      action: "Create",
    },
    {
      key: "4",
      sn: "4",
      timestamp: "4/2/2023 - 9:00am",
      name: "Joy Smart",
      id: "FC923456",
      source: "192.168.1.34",
      action: "Updated",
    },
  ];

  const onChange = ({ pagination, filters, sorter, extra }: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
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
        <h3>Audit Trail</h3>
        <div className="action">
          <Button
            variant="transparent"
            label="EXPORT AS CSV"
            onClick={() => setModalOpen(true)}
          />
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
          centered
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          className="inventory-modal"
          style={{
            borderRadius: 10,
            padding: 20,

            width: 316,
          }}
        >
          <br />
          <h3>Please re-enter your pin to download audit log</h3>
          <br />
          <Input label="New Password" type="password" secure />
          <br />

          <br />
          <div className="edit-submit">
            <Button label="DOWNLOAD" variant="primary" onClick={SuccessModal} />
          </div>
          <br />
        </Modal>
        <Modal
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          className="audit-trail-modal"
        >
          <h3>
            Event Type: <span>Admin Login Attempt</span>
          </h3>
          <div className="image">
            <img src={adminLogin} alt="admin-login" />
          </div>
          <p>
            The admin, michael@accessbankplc.com, was logged in to the Admin
            Portal
          </p>
          <div className="further-details">
            <div className="time-stamp">
              <h3>Timestamp</h3>
              <p>Mar 07, 2023 @ 09:27:56:91</p>
            </div>
            <div className="initiator">
              <h3>Initiated By</h3>
              <p>michael@accessbankplc.com</p>
            </div>
            <div className="location">
              <h3>Location</h3>
              <p>102.89.42.4 (client IP)</p>
              <p>Osun state, NG; Africa Lagos</p>
            </div>
          </div>
        </Modal>
      </div>
      <StatusModal
        status="success"
        title="Successful"
        message="Download Successful"
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

export default AdminAuditTrail;
