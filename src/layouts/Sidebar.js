import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Users",
    href: "/users",
    icon: "bi bi-patch-check",
  },
  {
    title: "BrokersList",
    href: "/brokersList",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Carousel",
    href: "/carousel",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Request Links",
    href: "/requestLinks",
    icon: "bi bi-link",
  },
  {
    title: "Slider",
    href: "/slider",
    icon: "bi bi-card-text",
  },
  {
    title: "Courses",
    href: "/courses",
    icon: "bi bi-columns",
  },

  // {
  //   title: "Forms",
  //   href: "/forms",
  //   icon: "bi bi-textarea-resize",
  // },
  // {
  //   title: "Table",
  //   href: "/table",
  //   icon: "bi bi-layout-split",
  // },
  // {
  //   title: "Login",
  //   href: "/login",
  //   icon: "bi bi-people",
  // },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
     
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}

        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
