// React Router Dom
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
      <div id="page">
        <div id="pageHeader">
          <nav>
            <Link to="/">
              <img src={require('../assets/images/sprinkleLogo.png')} id="navLogo"></img>
            </Link>
            <ul>
              <li className="hoverNav">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div id="pageContent">
          <Outlet/>
        </div>

        <div id="pageFooter">
          <Link to="/">
            <img src={require('../assets/images/sprinkleLogo.png')} id="footerLogo"></img>
          </Link>
        </div>

      </div>
    );
  }