import React from "react";

class Sidebar extends React.Component {
  render() {
    let sidebarItems = [
      {
        name: "Home",
        routeAction: "HOME",
        route: "/",
        children: [
          {
            name: "Dashboard 1",
            routeAction: "DASHBOARD",
            route: "/dashboard",
            children: [],
            isCollapsed: false
          },
          {
            name: "Dashboard 2",
            routeAction: "DASHBOARD",
            route: "/dashboard",
            children: [],
            isCollapsed: false
          }
        ],
        isCollapsed: false
      },
      {
        name: "Dashboard",
        routeAction: "DASHBOARD",
        route: "/dashboard",
        children: [
        ],
        isCollapsed: false
      }
    ];

    return (
      <aside className="menu">{this.prepareMenusHTML(sidebarItems)}</aside>
    );
  }

  prepareMenusHTML(menus) {
    let html = `<ul>`;
    menus.forEach(menuItem => {
        html += `<li><a>${menuItem.name}</a></li>`;

        if (menuItem.children.length > 0) {
          html += this.prepareMenusHTML(menuItem.children);
        }
    });
    html += `</ul>`;
    return html;
  }
}

export default Sidebar;
