import React from "react";
import Menu from "./Menu";
import { ReactComponent as FacebookSVG } from '../../assests/images/icon-facebook.svg';
import { ReactComponent as InstagramSVG } from '../../assests/images/icon-instagram.svg';
const Footer = () => {
  const customer_service = [
    { title: "Accessibility", url: "#" },
    { title: "Contact Us", url: "#" },
    { title: "Return Policy", url: "#" },
    { title: "FAQ", url: "#" },
    { title: "Gift Certificates", url: "#" },
    { title: "Wishlist", url: "#" },
  ];
  const company = [
    { title: "About Us", url: "#" },
    { title: "Careers", url: "#" },
    { title: "Press", url: "#" },
    { title: "Affiliates", url: "#" },
  ];
  return (
    <div className="Footer_section">
      <div className="container">
        <div className="footer_inner_section">
          <div className="footer_content">
            <Menu title={"Customer Service"} links={customer_service} />
            <Menu title={"Company"} links={company} />
          </div>
          <div className="footer_follow_us">
            <h5 className="footer_heading">Follow Us</h5>
            <ul>
              <li>
                <a href="#">
                  <FacebookSVG />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramSVG />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
