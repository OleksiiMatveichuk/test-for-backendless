import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>1</NavLink>
        </li>
        <li>
          <NavLink to={"/1"}>2</NavLink>
        </li>
        <li>
          <NavLink to={"/2"}>3</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
