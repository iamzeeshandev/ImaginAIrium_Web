
'use client'
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamic import for the WOW library
const WOW = dynamic(() => import('wowjs/dist/wow'));
import Header from "./header/Header";
import BackToTop from "@/components/elements/BackToTop";
import Footer from "./footer/Footer";

export default function Layout({ headerStyle, footerStyle, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
    };

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className={`boxed_wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                {(headerStyle === 1 || !headerStyle) && <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}

                {children}

                {(footerStyle === 1 || !footerStyle) && <Footer />}
            </div>
            <BackToTop scroll={scroll} />
        </>
    );
}
