/* eslint-disable @next/next/no-img-element */

'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    }, [])

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")
    return (
        <>
            <div className="filters mb_50">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All</li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Realistic</li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Artistic</li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Abstract </li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Photos</li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 masonry-item all cat-1 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <Link href="assets/images/project/project-1.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src="assets/images/project/gallery-6.jpg" alt="" />
                                </Link>
                            </figure>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-6  masonry-item all cat-2 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <Link href="assets/images/project/project-2.jpg" className="lightbox-image" data-fancybox="gallery">
                                    <img src="assets/images/project/gallery-5.jpg" alt="" />
                                </Link>
                            </figure>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="assets/images/project/project-3.jpg" className="lightbox-image" data-fancybox="gallery">
                                <img src="assets/images/project/gallery-4.jpg" alt="" /></Link></figure>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="assets/images/project/project-4.jpg" className="lightbox-image" data-fancybox="gallery">
                                <img src="assets/images/project/gallery-3.jpg" alt="" /></Link></figure>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 masonry-item all cat-2 cat-1 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="assets/images/project/project-5.jpg" className="lightbox-image" data-fancybox="gallery">
                                <img src="assets/images/project/gallery-2.jpg" alt="" /></Link></figure>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 masonry-item all cat-2 cat-3 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="assets/images/project/project-6.jpg" className="lightbox-image" data-fancybox="gallery">
                                <img src="assets/images/project/gallery-1.jpg" alt="" /></Link></figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
