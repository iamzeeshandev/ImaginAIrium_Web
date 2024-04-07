/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
export default function CodeSection() {
    return (
        <section className="feature-section pb_120">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box mr_40">
                            <div data-animation-box className="sec-title mb_25">
                                <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">Generate Code</span>
                                <h2>The AI Code Generator help you Create</h2>
                            </div>
                            <div className="text-box">
                                <p>A cutting edge IDE powered by AI. Prompt driven and built-in functionalities provide a dedicated environment for efficient <strong>coding</strong>.</p>
                                <ul className="list-style-one clearfix">
                                    <li>Effortless Code Generation with Prompts</li>
                                    <li>Enhanced Productivity with AI-powered Assistance</li>
                                    <li>Adaptable to Various Programming Languages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_two image_block_two_rgba">
                            <div className="box_without_padding">
                                <figure className="image">
                                    <img src="assets/images/resource/gen-coding.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

