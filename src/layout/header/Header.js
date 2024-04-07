'use client'
import Link from "next/link";
import MobileMenu from "../MobileMenu"
import Menu from "../Menu";

export default function Header({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}

                {/* Header Upper */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <Link href="/">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="assets/images/logo-rev-5.png" alt="" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="menu-area">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler p_15" onClick={handleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>

                            </div>
                            {/* Menu Right Content */}
                            <ul className="menu-right-content">
                                <li className="btn-box">
                                    <Link href="/" className="theme-btn btn-one pl_50 pr_50 p_10"><span>Login</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <Link href="/">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="assets/images/logo-rev-5.png" alt="" />
                                    </Link>
                                </figure>
                            </div>

                            <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            <ul className="menu-right-content">
                                <li className="btn-box">
                                    <Link href="/" className="theme-btn btn-one pl_50 pr_50 p_10"><span>Login</span></Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>{/* End Sticky Menu */}

                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
