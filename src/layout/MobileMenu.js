/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";

export default function MobileMenu({ handleMobileMenu }) {
  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/white-logo.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li><Link href="/">Home</Link></li>
                <li><Link href="#imagin-ai-rium">ImaginAIrium</Link></li>
                <li><Link href="#veloci-trade">VelociTrade</Link></li>
                <li><Link href="#pricing" onClick={handleMobileMenu}>Pricing</Link></li>
                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>4200 W Russell Las Vegas, North Carolina</li>
              <li><Link href="tel:+(702) 737-8657">+(702) 737-8657</Link></li>
              <li><Link href="mailto:support@revolutionai.io">support@revolutionai.io</Link></li>
            </ul>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
              <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
              <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
              <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
            </ul>
          </div>
        </nav>
      </div>{/* End Mobile Menu */}
    </>
  );
};

