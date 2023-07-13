import React from "react";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import "./Policy.css";
import { useNavigate } from 'react-router-dom';
function Menu() {
  const nav = useNavigate();
    const handlePolicy=()=>{
        nav("/Policy")
            }
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;