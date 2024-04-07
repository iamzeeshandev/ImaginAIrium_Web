/* eslint-disable @next/next/no-img-element */

'use client'
import React from 'react';

export default function About() {
  return (
    <section id="about-us" className="about-section pb_120">
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
                  <h2>Create AI Arts in seconds by Text only</h2>
                </div>
                <div className="text-box mb_40">
                  <p>
                    Our suite of products, <strong>ImaginAIrium</strong>, offers a range of creative platforms to inspire you, provide answers, and have fun.
                    With our custom AI model, Lily AI, you can express your imagination through coding, image and video generation, and even build your own adventure games.
                    Learn something new and fall in love with the possibilities of <strong>ImaginAIrium</strong>,.
                  </p>
                  <ul className="list-style-one clearfix">
                    <li>Easily generate Video with detailed text prompts</li>
                    <li>Easily generate Code with detailed text prompts</li>
                    <li>Have a chat with a historical figure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
