/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
export default function ImageSection() {
  return (
    <section className="feature-section pt_120 pb_120">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box mr_40">
              <div data-animation-box className="sec-title mb_25">
                <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">Generate Images</span>
                <h2>The AI Image Generator help you Create</h2>
              </div>
              <div className="text-box">
                <p>This tool empowers you to produce and tweak images with ease. It offers an array of customization options that allow you to create highly detailed and precise visuals.</p>
                <ul className="list-style-one clearfix">
                  <li>Unleash Your Creativity with Diverse Art Styles</li>
                  <li>Easily generate images with detailed text prompts</li>
                  <li>Generate high-quality images with up to 8K resolution</li>
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

