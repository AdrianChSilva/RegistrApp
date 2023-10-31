import { useRef } from "react";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";

export default function MenuSettings() {
  const menu = useRef<Menu>(null);

  const items: MenuItem[] = [
    {
      url: "/userRegister",
      label: "Add Student",
      template: (item) => (
        <div className="p-menuitem-link">
          <NavLink to={item.url!}>
            <span className="p-menuitem-icon pi pi-fw pi-user-plus"></span>
            <span className="p-menuitem-text">{item.label}</span>
          </NavLink>
        </div>
      ),
    },
    {
      url: "/courseRegister",
      label: "Add Course",
      template: (item) => (
        <div className="p-menuitem-link">
          <NavLink to={item.url!}>
            <span className="p-menuitem-icon pi pi-fw pi-file-edit"></span>
            <span className="p-menuitem-text">{item.label}</span>
          </NavLink>
        </div>
      ),
    },
    {
      separator: true,
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  return (
    <div className="card flex justify-content-center">
      <Menu model={items} popup ref={menu} />
      <Button
        label="Settings"
        icon="pi pi-cog"
        onClick={(e) => {
          menu.current?.toggle(e);
        }}
      />
    </div>
  );
}
