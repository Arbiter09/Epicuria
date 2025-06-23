import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="company-logo" src={LOGO_URL} />
        <span>EPICURIA</span>
      </div>
      <div className="options-header">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>Cart</span>
      </div>
    </div>
  );
};
export default Header;
