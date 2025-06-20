import { LOGO_URL } from "../utils/constants"

const Header = () => {
    return (
    <div className="header-container">
        <div className="logo-container">
            <img className="company-logo" src={LOGO_URL} />
            <span>EPICURIA</span>
        </div>
        <div className="options-header">
            <span>Home</span>
            <span>About</span>
            <span>Contact Us</span>
            <span>Cart</span>
        </div>
    </div>
    )
}
export default Header