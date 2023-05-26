import { useState } from "react";
import { Table } from "antd";
import "./home.scss";

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
    dataIndex: "dateCreated",
    sorter: {
      compare: (a: any, b: any) => a.dateCreated - b.dateCreated,
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
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a: any, b: any) => a.email - b.email,
      multiple: 2,
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
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    sn: "1",
    dateCreated: "1/2/2023",
    name: "Sam Ohio",
    email: "sam@accessplc.com",
    role:"Risk Admin Supervisor",
    status: "Pending",
 
  },
  {
    key: "2",
    sn: "2",
    dateCreated: "2/2/2023",
    name: "Monsor Musa",
    email: "musa@accessplc.com",
    role:"Business and Product Admin",
    status: "Pending",

  },
  {
    key: "3",
    sn: "3",
    dateCreated: "3/2/2023",
    name: "King Paul",
    email: "paul@accessplc.com",
    role:"Marketing Admin Supervisor",
    status: "Pending",

  },
  {
    key: "4",
    sn: "4",
    dateCreated: "4/2/2023",
    name: "Joy Smart",
    email: "joy@accessplc.com",
    role:"Finance Admin",
    status: "Pending",

  },
    
];

const onChange = ({pagination, filters, sorter, extra}:any) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Requests = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = ({newSelectedRowKeys}:any) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
  return (
    <div className="outlet-table">
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
};

export default Requests;
