import React from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import "./footer.css";
import { Link } from "react-router-dom";
import LogoFooter from "../../assests/images/CS_white.png";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container01">
          <img
            className="footerlogo"
            src={LogoFooter}
            alt="cs logo"
            style={{ height: "95px", width: "289px" }}
          />
          <div className="footer_sub"> Subscribe to our newsletter: </div>
          <div className="footer__input-container">
            <input
              className="footer__input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="footer__button">Subscribe</button>
          </div>
          <div className="footer__policy">
            <input
              type="checkbox"
              id="rememberMe"
              className="footer__policy_label"
            />
            <label htmlFor="rememberMe">
              By continuing, you accept the privacy policy
            </label>
          </div>
          <h2 className="footer__title">Follow us on social media</h2>
          <div className="footer__social">
            <Link to="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="#" className="social-icon linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link to="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
        <div className="footer__container02">
          <div className="contact-info">
            <div className="email">
              <MdEmail className="contact-icon" />
              <h3>ieeecs@univ.jfn.ac.lk</h3>
            </div>
            <div className="address">
              <MdLocationPin className="contact-icon" />
              <div className="address__text">
                <span>Department of Computer Science,</span>
                <span>Faculty of Science,</span>
                <span>University of Jaffna,</span>
                <span>Jaffna</span>
                <span>Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__container03">
          <iframe
            title="csDepartmentLocation"
            className="mapcontainer"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.4735136830504!2d80.01930569839477!3d9.685562500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe54125cafe551%3A0x61d1a49bcd146dfe!2zRGVwYXJ0bWVudCBvZiBDb21wdXRlciBTY2llbmNlLCBVbml2ZXJzaXR5IG9mIEphZmZuYS4g4K6V4K6j4K6_4K6p4K6_IOCuheCuseCuv-CuteCuv-Cur-CusuCvjSDgrqTgr4HgrrHgr4gsIOCur-CuvuCutOCvjeCuquCvjeCuquCuvuCuo-CuruCvjSDgrqrgrrLgr43grpXgrrLgr4jgrpXgr43grpXgrrTgrpXgrq7gr40!5e0!3m2!1sen!2sus!4v1684678012881!5m2!1sen!2sus"
            width="462px"
            height="300px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer__bottom">
        <span>IEEE Computer Society Student Branch University of Jaffna</span>
        <span>
          Copyright © 2024 CS IEEE SB Chapter of UOJ - ALL rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
