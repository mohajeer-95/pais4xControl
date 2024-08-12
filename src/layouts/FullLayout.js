import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
// import { useAuth } from './../routes/AuthContext'; // Adjust path as needed

const FullLayout = () => {
  // const { isAuthenticated } = useAuth();

  return (
    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
      <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
