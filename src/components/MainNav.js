import { NavLink } from "react-router-dom";
import classes from "./MainNav.css";

export default function MainNav() {
  return <>
    <header>
      <nav>
        <ul className="main-nav">
          <li>
            <NavLink 
              to="/"
              className={({isActive})=>isActive?'active':undefined}
              >
                Home
              </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Products"
              className={({isActive})=>isActive?'active':undefined}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
}