import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
export default function Navigation() {
  return (
    <div className="navigation">
      <div className="nav-icon">
        <NavLink to="/">
          {({ isActive }) => (
            <img
              src={
                isActive
                  ? "./house-solid (1).svg"
                  : "./house-solid.svg"
              }
              alt="icon"
              width={24}
              height={24}
            />
          )}
        </NavLink>
      </div>
      <div className="nav-icon">
        <NavLink to="about">
          {({ isActive }) => (
            <img
              src={
                isActive ? "./user-solid (1).svg" : "./user-solid.svg"
              }
              alt="icon"
              width={24}
              height={24}
            />
          )}
        </NavLink>
      </div>
      <div className="nav-icon">
        <NavLink to="portfolio">
          {({ isActive }) => (
            <img
              src={
                isActive
                  ? "./briefcase-solid (1).svg"
                  : "./briefcase-solid (2).svg"
              }
              alt="icon"
              width={24}
              height={24}
            />
          )}
        </NavLink>
      </div>
      <div className="nav-icon">
        <NavLink to="contact">
          {({ isActive }) => (
            <img
              src={
                isActive
                  ? "./address-book-solid.svg"
                  : "./address-book-solid (1).svg"
              }
              alt="icon"
              width={24}
              height={24}
            />
          )}
        </NavLink>
      </div>
    </div>
  );
}
