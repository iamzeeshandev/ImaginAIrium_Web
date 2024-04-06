/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
export default function VideoSection() {
    return (
        <section className="about-style-three pb_150">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_five">
                            <div className="image-box mr_80">
                                <figure className="image"><img src="assets/images/resource/gen-video.jpg" alt="" /></figure>
                                <ul className="image-content clearfix">
                                    <li>
                                        <div className="icon"><img src="assets/images/icons/icon-9.png" alt="" /></div>
                                        <h6>Enter Text</h6>
                                    </li>
                                    <li className="load">
                                        <div className="icon"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                        <h6>Generate</h6>
                                    </li>
                                    <li>
                                        <button type="button"></button>
                                        <div className="icon"><img src="assets/images/icons/icon-9.png" alt="" /></div>
                                        <h6>Upload Text</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                            <div className="content-box ml_40">
                                <div data-animation-box className="sec-title mb_25">
                                    <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">Generate Video</span>
                                    <h2>The AI Video Generator help you Create</h2>
                                </div>
                                <div className="text-box mb_40">
                                    <p>Transform your text into captivating videos with our powerful tool. Enjoy a wide range of customization options to create unique and engaging content.</p>
                                </div>
                                <div className="inner-box">
                                    <div className="single-item mb_40">
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h6 className="pt_14">Easily generate videos with detailed text prompts</h6>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h6 className="pt_14">Generate high-quality videos with up to 2K video (Quad HD)</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

