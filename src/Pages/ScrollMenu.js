import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import arrowLeft from '../images/arrow_left_white.svg'
import arrowRight from '../images/arrow_right_white.svg'

const ScrollMenu = ({ items }) => {
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
                    fontSize: 18,
                    color: "white",
                    cursor: "pointer",
                    border: item.id === active && "solid 1px",
                    padding: "10px 15px",
                    fontWeight: 'normal',
                    borderRadius: 5
                }}
                onClick={()=> setActive(item.id)}
                >
                {item.name}
                </h4>
                {item.id === active && <div style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', backgroundColor: '#f1f0ee', width: 23, height: 20, position: 'absolute', bottom: 0, left: '46%'}}>
                </div>}
            </div>
          );
        })}
      </div>
      <div className="right-icon-container">
        <IconButton>
          <img src={arrowRight} height={20} alt="icon_left"/>
        </IconButton>
      </div>
    </div>
  );
};

export default ScrollMenu;
