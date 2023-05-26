import { ReactComponent as homeIcon} from "assets/icons/home.svg";
import { ReactComponent as adminUser} from "assets/icons/admin.svg";
import { ReactComponent as requests} from "assets/icons/requests.svg";
import { ReactComponent as folder} from "assets/icons/folder.svg";


import { ReactComponent as orderMgt } from "assets/icons/order_management.svg";
import { ReactComponent as productMgt } from "assets/icons/product_mgt.svg";
import { ReactComponent as outletMgt } from "assets/icons/outlet_mgt.svg";
import {ReactComponent as ratings} from "assets/icons/ratings_reviews.svg"
import { ReactComponent as  signOut} from "assets/icons/sign_out.svg";





const SidebarItems = [
  {
    title: "home",
    path: "/dashboard/home",
    icon: homeIcon,
  },
  {
    title: "Admin User",
    path: "/dashboard/oxygen-admin",
    icon: adminUser,
  },
  {
    title: "Request",
    path: "/dashboard/requests",
    icon: requests,
  },
  {
    title: "Audit Trail",
    path: "/dashboard/audit-trail",
    icon: folder,
  },
  {
    title: "Logout",
    path: "",
    icon: signOut,
  },
];
export default SidebarItems;
