import React, { useState } from "react";

function Menu({ title, links }) {
  const [open, setOpen] = useState(true)
  const toggleMenu = ()=>{
    setOpen(!open)
  }
  return (
    <div className="footer_menu">
      <div className="footer_menu_header">
        <h5 className="footer_heading" onClick={toggleMenu}>{title}</h5>
        {open?<span>-</span>:<span>+</span>}
      </div>
      {open&&
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>}
    </div>
  );
}

export default Menu;
