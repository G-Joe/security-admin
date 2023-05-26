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
      multiple: 1,
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

];

const data = [
  {
    key: "1",
    sn: "1",
    dateCreated: "1/2/2023",
    name: "Sam Ohio",
    group: "Risk Admin Supervisor",
    role:"Risk Admin Supervisor",
    status: "Active",
    email: "sam@accessplc.com"
  },
  {
    key: "2",
    sn: "2",
    dateCreated: "2/2/2023",
    name: "Monsor Musa",
    group: "Business and Product Admin",
    role:"Business and Product Admin",
    status: "Active",
    email: "musa@accessplc.com"
  },
  {
    key: "3",
    sn: "3",
    dateCreated: "3/2/2023",
    name: "King Paul",
    group: "Marketing Admin",
    role:"Marketing Admin Supervisor",
    status: "Active",
    email: "paul@accessplc.com"
  },
  {
    key: "4",
    sn: "4",
    dateCreated: "4/2/2023",
    name: "Joy Smart",
    group: "Finance Admin",
    role:"Finance Admin",
    status: "Disabled",
    email: "joy@accessplc.com"
  },
    
];

const onChange = ({pagination, filters, sorter, extra}:any) => {
  console.log("params", pagination, filters, sorter, extra);
};

const NewAdmins = () => {
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

export default NewAdmins;
