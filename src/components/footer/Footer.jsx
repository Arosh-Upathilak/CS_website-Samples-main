import React from 'react'
import { MdEmail , MdLocationPin} from "react-icons/md";
import './footer.css'
import { Link } from 'react-router-dom';
import LogoFooter from '../../assests/images/CS_white.png'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
   <div className='footer'>
    <div className='footer__container'>

      <div className='footer__container01'>
        <img className='footerlogo'  src={LogoFooter} alt='cs logo' style={{ height:'95px' , width:'289px'}}/>
        <div className='footer_sub'> Subscribe for our newsletter: </div>
        <input className='footer__input' type='email' placeholder='Enter your email'/>

        <div className='footer__policy'>
          <input type="checkbox" id="rememberMe" class="footer__policy_lable"/>
            <h3>by continuing, you accept the privacy policy</h3>
        </div>
        <button className='footer__button'>Subscribe</button>

        <h2 className='footer__title'>Follow us on social media</h2>
        <div className='footer__social'>
              <Link ><FontAwesomeIcon icon={faFacebook} style={{height: '30px', width: '30px', color: "#ffffff"}} /></Link>
              <Link ><FontAwesomeIcon className='icon-link' icon={faLinkedinIn} style={{ height: '30px', width: '30px', color: '#062451' }} /></Link>
              <Link><FontAwesomeIcon icon={faInstagram} style={{height: '30px', width: '30px',color: "#ffffff",}} /></Link>
             
        </div>
      </div>

      <div className='footer__container02'>
          <div className='email'>
            <MdEmail className='email__icon'/>
            <h3>ieeecs@univ.jfn.ac.lk</h3>
          </div>
          <div className='address'> 
            <MdLocationPin className='address__icon'/>
            <div className='address__text'>
              <span>Department of Computer Science,</span>
              <span>Faculty of Science,</span>
              <span>University of Jaffna,</span>
              <span>Jaffna</span>
              <span>Sri Lanka</span>
            </div>

          </div>
      </div>
      <div className='footer__container03'>
        <iframe title="csDepartmentLocation" className="mapcontainer" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.4735136830504!2d80.01930569839477!3d9.685562500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe54125cafe551%3A0x61d1a49bcd146dfe!2zRGVwYXJ0bWVudCBvZiBDb21wdXRlciBTY2llbmNlLCBVbml2ZXJzaXR5IG9mIEphZmZuYS4g4K6V4K6j4K6_4K6p4K6_IOCuheCuseCuv-CuteCuv-Cur-CusuCvjSDgrqTgr4HgrrHgr4gsIOCur-CuvuCutOCvjeCuquCvjeCuquCuvuCuo-CuruCvjSDgrqrgrrLgr43grpXgrrLgr4jgrpXgr43grpXgrrTgrpXgrq7gr40!5e0!3m2!1sen!2sus!4v1684678012881!5m2!1sen!2sus" width="462px" height="300px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    <div className='footer__bottom'>
      <span>IEEE Computer Society Student Branch University of Jaffna</span>
      <span>Copyright 2024 CS IEEE SB Chapter of UOJ - ALL right reserved.</span>
      <span>Use of this Web site signifies your agreement to the CS IEEE SB Chapter of UOJ Teams and Conditions.</span>
      <span>A not-for-profit organization, IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefits of humanity.</span>
    </div>

    </div>

  )
}

export default Footer
