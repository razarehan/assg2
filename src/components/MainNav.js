import { Link } from "react-router-dom";

export default function MainNav() {
  return <>
    <header>
      <nav>
        <ul className="main-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Products">Prodects</Link></li>
        </ul>
      </nav>
    </header>
  </>
}