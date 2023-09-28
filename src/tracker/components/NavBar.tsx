import { TabMenu } from "primereact/tabmenu";
import { MenuItem } from "primereact/menuitem";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const items: MenuItem[] = [
    {
      id: "1",
      label: "Summary",
      url: "/summary",
      template: (item) => (
        <NavLink
          to={item.url!}
          className={({ isActive }) =>
            `p-menuitem-link ${isActive ? "!text-indigo-500" : ""}`
          }
        >
          <span
            className="p-menuitem-icon pi pi-fw pi-desktop"
            data-pc-section="icon"
          ></span>
          {item.label}
        </NavLink>
      ),
    },
    {
      id: "2",
      label: "Students",
      icon: "pi pi-fw pi-calendar",
      url: "/userRegister",
      template: (item) => (
        <NavLink
          to={item.url!}
          className={({ isActive }) =>
            `p-menuitem-link ${isActive ? "!text-indigo-500" : ""}`
          }
        >
          <span
            className="p-menuitem-icon pi pi-fw pi-calendar"
            data-pc-section="icon"
          ></span>
          {item.label}
        </NavLink>
      ),
    },
    {
      id: "3",
      label: "Courses",
      icon: "pi pi-fw pi-pencil",
      url: '/#',
      template: (item) => (
        <NavLink
          to={item.url!}
          className={({ isActive }) =>
            `p-menuitem-link ${isActive ? "!text-indigo-500" : ""}`
          }
        >
          <span
            className="p-menuitem-icon pi pi-fw pi-calendar"
            data-pc-section="icon"
          ></span>
          {item.label}
        </NavLink>
      ),
    },
    // {label: 'Edit', icon: 'pi pi-fw pi-file'},
    {
      id: "4",
      label: "Settings",
      icon: "pi pi-fw pi-cog",
      url: '/#',
      template: (item) => (
        <NavLink
          to={item.url!}
          className={({ isActive }) =>
            `p-menuitem-link ${isActive ? "!text-indigo-500" : ""}`
          }
        >
          <span
            className="p-menuitem-icon pi pi-fw pi-calendar"
            data-pc-section="icon"
          ></span>
          {item.label}
        </NavLink>
      ),
    },
  ];

  return (
    <div className="card mb-8">
      <TabMenu
        model={items}
        activeIndex={9}
      />
    </div>
  );
};
