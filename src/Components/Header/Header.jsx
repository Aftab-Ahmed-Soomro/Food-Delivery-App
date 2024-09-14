import { NavLink } from "react-router-dom";
import Button from "../Common/Button/Button"
import './Header.css';
// import { ButtonImages } from "../../utils/constants/images";

const Header = () => {
  // const {appleIcon} = ButtonImages;
  return (
    <div className="header-wrapper">
      <div className="logo">
        <h1>FOODIES</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="btn-wrapper">
        <NavLink to="/order"><Button btnTitle="Order Now!" /></NavLink>
        {/* <Button isImage img1={appleIcon} btnTitle="App Store!" /> */}
      </div>
    </div>
  )
}

export default Header
