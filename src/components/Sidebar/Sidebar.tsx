import { Fragment, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import dropdownIcon from "assets/icons/dropdown.svg";
import "./Sidebar.scss";

const Sidebar = ({ menuIcon }: any) => {
  const [activeParent, setActiveParent] = useState("");

  const location = useLocation();

  return (
    <>
      <div className="sidebar-wrapper">
        <div className={`${menuIcon && `mobile`} sidebar`}>
          <ul className="sidebar-menu">
            {SidebarItems.map((item, i) => {
              const Logo = item.icon;
              return (
                <Fragment key={i}>
                  <NavLink
                    onClick={(e) => {
                      if (item.path === activeParent) {
                        setActiveParent("");
                      } else {
                        setActiveParent(item.path);
                      }
                      // item.children && e.preventDefault();
                    }}
                    to={item.path}
                  >
                    <div className="first">
                      <Logo className="icon-logo" />
                      {item.title}
                    </div>
                    {/* {item.children && (
                      <img src={dropdownIcon} alt="dropdownIconImg" />
                    )} */}
                  </NavLink>
                  <div className="sidebar-children">
                    <ul className="sidebar-children-item">
                      {/* {item.children?.map((child_item, j) => {
                        return (
                          item.path === activeParent && (
                            <Fragment key={j}>
                              <NavLink
                                to={child_item.path}
                                className="child-active"
                              >
                                {child_item.title}
                              </NavLink>
                            </Fragment>
                          )
                        );
                      })} */}
                    </ul>
                  </div>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
