/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
export default function ImaginAIrium() {
    return (
        <section className="feature-section pt_120 pb_120">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box mr_40">
                            <div data-animation-box className="sec-title mb_25">
                                <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">ImaginAIrium</span>
                                <h2>Unlock Your Creative Potential with <strong className="color_primary">ImaginAIrium</strong></h2>
                            </div>
                            <div className="text-box">
                                <p>Our suite of products, ImaginAIrium, offers a range of creative platforms to inspire you, provide answers, and have fun.
                                    With our custom AI model, Lily AI, you can express your imagination through coding, image and video generation, and even build your own adventure games.
                                    Learn something new and fall in love with the possibilities of ImaginAIrium.</p>
                                <ul className="list-style-one clearfix">
                                    <li>Unleash your creativity</li>
                                    <li>Powered by Lily AI</li>
                                    <li>Ignite your curiosity & have fun</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_two image_block_two_rgba">
                            <div className="box_without_padding">
                                <figure className="image">
                                    <img src="assets/images/resource/gen-img.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

