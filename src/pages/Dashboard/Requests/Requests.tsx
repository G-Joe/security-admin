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
import "./Requests.scss";

const Requests = () => {
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
      title: "Request by",
      dataIndex: "requestBy",
      sorter: {
        compare: (a: any, b: any) => a.requestBy - b.requestBy,
        multiple: 5,
      },
    },
    {
      title: "Request for",
      dataIndex: "requestFor",
      sorter: {
        compare: (a: any, b: any) => a.requestFor - b.requestFor,
        multiple: 4,
      },
    },
    {
      title: "Group",
      dataIndex: "group",
      sorter: {
        compare: (a: any, b: any) => a.group - b.group,
        multiple: 3,
      },
    },
    {
      title: "Priority",
      dataIndex: "priority",
      sorter: {
        compare: (a: any, b: any) => a.priority - b.priority,
        multiple: 2,
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
        <div onClick={() => setModalOpen(true)}>
          <p style={{ cursor: "pointer" }}>Respond</p>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sn: "1",
      date: "16/03/2023 - 1:20PM",
      requestBy: "Odeyemi John",
      requestFor: "Dio Dre",
      group:"Risk Admin Supervisor",
      priority: "High Level",

    },
    {
      key: "2",
      sn: "2",
      date: "17/03/2023 - 2:30PM",
      requestBy: "Odeyemi John",
      requestFor: "Joy Smart",
      group:"Product and Business Admin Officer",
      priority: "Medium Level",
    },
    {
      key: "3",
      sn: "3",
      date: "18/3/2023 - 8:00AM",
      requestBy: "Odeyemi John",
      requestFor: "Sam Osho",
      group:"Customer Relationship Admin Officer",
      priority: "Low Level",
    },
    {
      key: "4",
      sn: "4",
      date: "19/3/2023 - 8:00AM",
      requestBy: "Odeyemi John",
      requestFor: "Hala Dava",
      group:"Security Admin",
      priority: "High Level",
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
        <h3>My Request Status</h3>
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
            maxWidth:382,
            height: 665,
            borderRadius:3,
            marginRight:0,
          }}
        >
          <h3>Request</h3>
          <br />
            <Input label="Name"type="text" placeholder="Sam Oshio" readonly={true}/><br/>
            <Input label="Group" type="text" placeholder="Risk Admin"readonly={true}/><br/>
            <Input label="Email" type="text" placeholder="sam@accessbankplc.com" readonly={true}/><br/>
            <Input label="Role" type="text" placeholder="Risk Admin Supervisor" readonly={true}/><br/>
            <Input label="Priority" type="text" placeholder="Low Level" readonly={true}/><br/>
            <Input label="Reason" type="textarea" placeholder="psum dolor sit amet consectetur. Egestas aenean congue eget felis." readonly={true}/><br/>
           
            <br />
          <div className="edit-submit">
            <Button label="APPROVE" variant="primary" onClick={SuccessModal} />
            <Button
              label="NOT APPROVED"
              variant="delete"
              onClick={Deactivate}
            />
          </div>
        </Modal>
      </div>
      <StatusModal
        status="success"
        title="Successful"
        message="You have granted this request"
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

export default Requests;
