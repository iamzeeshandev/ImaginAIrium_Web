/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
export default function ChatSection() {
    return (
        <section className="about-style-three pb_150">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_five">
                            <div className="image-box mr_80">
                                <figure className="image"><img src="assets/images/resource/about-5.jpg" alt="" /></figure>
                                <ul className="image-content clearfix">
                                    <li>
                                        <div className="icon"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                        <h6>Manual Subtitle</h6>
                                    </li>
                                    <li className="load">
                                        <div className="icon"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                        <h6>Auto Translate</h6>
                                    </li>
                                    <li>
                                        <button type="button"></button>
                                        <div className="icon"><img src="assets/images/icons/icon-9.png" alt="" /></div>
                                        <h6>Upload Texts</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                            <div className="content-box ml_40">
                                <div data-animation-box className="sec-title mb_25">
                                    <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">AT A GLANCE</span>
                                    <h2>The AI Video Generator at a glance now</h2>
                                </div>
                                <div className="text-box mb_40">
                                    <p>AI is not here to replace human creativity but it can amplify it and take it even further. So whether you are creating fanart of your favorite anime</p>
                                </div>
                                <div className="inner-box">
                                    <div className="single-item mb_40">
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h3>Keep it simple and be creative</h3>
                                        <p>Easily create your Zaplin account with one click and get</p>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h3>Make any changes you need</h3>
                                        <p>Easily create your Zaplin account with one click and get</p>
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

