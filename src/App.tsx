import { useLocation } from "react-router-dom";
import AuthLayout from "layout/AuthLayout";
import AuthRoutes from "navigation/AuthRoutes";
import DashboardLayout from "layout/DashboardLayout";
import DashboardRoutes from "navigation/DashboardRoutes";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  const hasSideMenu = location.pathname.includes("dashboard");

  const Layout = hasSideMenu ? DashboardLayout : AuthLayout;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Layout>
        <AuthRoutes />
        <DashboardRoutes />
      </Layout>
    </>
  );
};

export default App;
