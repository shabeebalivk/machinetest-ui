import React, { useState } from "react";
import { IconButton } from "@mui/material";
import arrowLeft from '../images/arrow_left.svg'
import arrowRight from '../images/arrow_right.svg'

const ScrollSubMenu = ({ items }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="topbar-navigation">
      <div className="left-icon-container">
        <IconButton>
          <img src={arrowLeft} height={20} alt="icon_left"/>
        </IconButton>
      </div>
      <div className="menu-items">
        {items.map((item) => {
          return (
            <div style={{height: '100%',display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                <h4
                style={{
                    // fontSize: 18,
                    color: item.id === active ? "white": "black",
                    backgroundColor: item.id === active && '#324d48',
                    cursor: "pointer",
                    padding: "10px 15px",
                    fontWeight: 'normal',
                }}
                onClick={()=> setActive(item.id)}
                >
                {item.name}
                </h4>
            </div>
          );
        })}
      </div>
      <div className="right-icon-container">
        <IconButton>
          <img src={arrowRight} height={20} alt="right_icon"/>
        </IconButton>
      </div>
    </div>
  );
};

export default ScrollSubMenu;
