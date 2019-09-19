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
      <nav className="nav">

      </nav>
    </div>
  );
};

export default Nav;
