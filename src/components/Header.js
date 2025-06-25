import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img className="company-logo" src={LOGO_URL} />
        </Link>
        <span>EPICURIA</span>
      </div>
      <div className="options-header">
        <span>
          {onlineStatus ? "Online" : "Offline"}: {onlineStatus ? "✅" : "❌"}
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/grocery">Grocery</Link>
        </span>
        <span>Cart</span>
      </div>
    </div>
  );
};
export default Header;
