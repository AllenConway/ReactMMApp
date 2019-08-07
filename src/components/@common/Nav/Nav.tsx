import * as React from "react";
import "./Nav.scss";

const Nav: React.FC = prop => {

 let menuItems:MenuItem[];

 interface MenuItem {
     title: string,
     route: string,
     icon: string
 }


 menuItems = [
     {
        title: 'Cabins',
        route: 'cabins',
        icon: 'cabins.jpg'
     }
 ];

  return (
    <div>
      <input id="nav-menu" className="nav-toggle" type="checkbox" />
      <label className="nav-dropdown">
        <span className="hamburger-menu">
          <span className="icon-bar top-bar" />
          <span className="icon-bar middle-bar" />
          <span className="icon-bar bottom-bar" />
        </span>
      </label>
      <nav className="nav">
        <div className="small-nav">
          <hr />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
