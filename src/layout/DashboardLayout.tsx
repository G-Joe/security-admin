import Sidebar from "components/Sidebar/Sidebar";
import DashNavbar from "components/DashNavbar/DashNavbar";
import DashFooter from "components/DashFooter/DashFooter";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <DashNavbar />
      <main>
        <div className="page-wrapper">
          <Sidebar />
          <div className="layout">{children}</div>
        </div>
      </main>
      <DashFooter />
    </>
  );
};

export default DashboardLayout;
