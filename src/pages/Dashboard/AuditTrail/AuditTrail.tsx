import { Tabs } from "antd";
import AdminAuditTrail from "./AdminAudit/AdminAuditTrail";
import UserAuditTrail from "./UsersAuditTrail/UsersAuditTrail";

const onChange = ({ key }: any) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Admin Audit Trail",
    children: <AdminAuditTrail />,
  },
  {
    key: "2",
    label: "Oxygen Users Audit Trail",
    children: <UserAuditTrail />,
  },
];

const AuditTrail = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default AuditTrail;
