import React, { useState, useEffect } from "react";
import "assets/scss/component/sidebar.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import classNames from "classnames";

export default function Sidebar({ routes }) {
  const [activeRoutePath, setActiveRoutePath] = useState("");
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    var routesData = [...routes];
    routesData = routesData.filter((route) => !route.hideFromAllSidebar);

    //eslint-disable-next-line
    routesData.map((route) => {
      route.link = route?.path;

      if (route?.path) {
        Object.keys(params).forEach((key) => {
          const paramValue = params[key];

          route.link = route.link.replace(`:${key}`, paramValue);
        });

        return route;
      }
    });

    // setLinkRoutes(routesData);
    setActiveRoutePath(location.pathname);
    //eslint-disable-next-line
  }, [location, params]);

  function activeRoute(routeName) {
    return activeRoutePath.indexOf(routeName) > -1 ? true : false;
  }

  var links = (
    <div className="content">
      <ul className="sideBarlist">
        {routes.map((prop, key) => {
          classNames({
            //eslint-disable-next-line
            [" " + "active"]: activeRoute(
              prop.layout + (prop?.link ?? prop?.path)
            ),
          });
          return (
            <li className="list" key={key}>
              <NavLink to={prop.layout + (prop?.link ?? prop.path)}>
                {/* {typeof prop.icon === "string" && (
                  <ConvertSvgToComponent
                    icon={prop.icon}
                    iconHeight={"20px"}
                    imageclass="mw-20"
                  />
                )} */}
                {prop.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return <div className="sidebarRoot">{links}</div>;
}
