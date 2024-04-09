/* eslint-disable @next/next/no-img-element */

'use client'
import React from 'react';

export default function AboutUs() {
    return (
        <section id="about-us" className="about-section pt_80">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_one">
                            <div data-animation-box className="image-box pl_50 pt_50 pb_50 pr_40 mr_40">
                                <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 single-column">
                                        <figure data-animation-text className="image image-1 overlay-anim-black-bg mb-0" data-animation="overlay-animation">
                                            <img src="assets/images/resource/about-us-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 single-column">
                                        <figure data-animation-text className="image image-2 overlay-anim-black-bg" data-animation="overlay-animation">
                                            <img src="assets/images/resource/about-us-4.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                            <div className="content-box ml_40">
                                <div data-animation-box className="sec-title mb_25">
                                    <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">About us</span>
                                    <h2>Meet the Visionaries Behind <strong className="color_primary">RevolutionAI.io</strong></h2>
                                </div>
                                <div className="text-box mb_40">
                                    <p>
                                        At <strong className="color_primary">RevolutionAI.io,</strong> we are at the heart of the artificial intelligence revolution.
                                        With a commitment to innovation and excellence, we are not just participants but leaders in the AI evolution,
                                        redefining what is possible across a myriad of industries.
                                        Our mission is simple: to harness the unparalleled potential of AI to empower creativity, innovation, and efficiency in enterprises around the globe.
                                    </p>
                                    <p>
                                        Join us on this journey to shape the future. Welcome to <strong className="color_primary">RevolutionAI.io,</strong>
                                        where AI meets innovation, and creativity knows no bounds.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
