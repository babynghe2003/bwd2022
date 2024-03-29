
import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import AdminFooter from "../components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

import routes from "../routes.js";

//data source
import questions from "../datas/questions";
import users from "../datas/users.js";
import Loading from "views/examples/Loading.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const [loading, setLoading] = React.useState(1);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  React.useEffect(() => {
    setLoading(1);
    setTimeout(() => {
      setLoading(0);
    }, 300);
  }, [location]);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        if (prop.path ==='/index')
        return (
          <Route
          path={prop.layout + prop.path}
          render={(props) => (loading ? <Loading/> : <prop.component users={users} />)}
          key={key}
        />
        );
        else
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => (loading ? <Loading/> : <prop.component questions={questions} users={users}/>)}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
    <Sidebar
      {...props}
      routes={routes}
      logo={{
        innerLink: "/admin/index",
        imgSrc: require("../assets/img/brand/logo.png").default,
        imgAlt: "...",
      }}

    />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
          users={users}
        />
        <Switch>
          {getRoutes(routes)}
          {/*<Redirect from="*" to="/admin/index" />*/}
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
