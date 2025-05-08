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
                  ? "public/house-solid (1).svg"
                  : "public/house-solid.svg"
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
                isActive ? "public/user-solid (1).svg" : "public/user-solid.svg"
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
                  ? "public/briefcase-solid (1).svg"
                  : "public/briefcase-solid (2).svg"
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
                  ? "public/address-book-solid.svg"
                  : "public/address-book-solid (1).svg"
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
