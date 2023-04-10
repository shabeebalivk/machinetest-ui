import React from "react";
import left from "../images/left.png";
import right from "../images/right.png";
import RemoveIcon from "@mui/icons-material/Remove";
import fb from '../images/fb.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/insta.svg'

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={left} alt="left" height={400} className="left-image" />
      <img src={right} alt="left" height={230} className="right-image" />
      <div className="quote-section">
        <h1 style={{ color: "#a5937a", fontWeight: 'normal', marginTop: 80 }}>
          "Real comfort, visual and physical.
          <br />
          is vital to every room."
          <br />
          <span
            style={{
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: 20,
              fontStyle: 'italic'
            }}
          >
            <RemoveIcon />
            Mark Hampton
          </span>
        </h1>
      </div>
      <div className="line"></div>
      <div className="link-section">
        <ul>
          <li>Sofas</li>
          <li>Chairs</li>
          <li>Benches</li>
          <li>Coffee Tables</li>
          <li>Side Tables</li>
        </ul>
        <ul>
          <li>Console Tables</li>
          <li>TV Stands</li>
          <li>Shelving</li>
          <li>Leather Furniture</li>
          <li>Dining Chairs</li>
        </ul>
        <ul>
          <li>Dining Tables</li>
          <li>Dining Benches</li>
          <li>Buffets & Bar Carts</li>
          <li>Bar & Counter Stools</li>
          <li>Beds</li>
        </ul>
        <ul>
          <li>Bedside Tables</li>
          <li>Dressers</li>
          <li>Mattresses</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="icons">
            <img src={fb} alt="facebook" width={25} style={{marginRight: 30, }}/>
            <img src={twitter} alt="twitter"  width={25} style={{marginRight: 30}}/>
            <img src={instagram} alt="instagram" width={25}/>
        </ul>
      </div>
      <div className="terms-info">
            Website Terms & Conditions | © SMART HATCH TECHNOLOGIES FZE
      </div>
    </div>
  );
};

export default Footer;
