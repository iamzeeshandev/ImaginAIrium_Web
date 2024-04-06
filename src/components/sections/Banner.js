/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
export default function Banner() {
  return (
    <>
      <section className="banner-section p_relative pb_120">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div data-animation-box className="content-box mr_30">
                <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">ImaginAIrium</span>
                <h2>Turn your Text into the <span>AI Content</span> in Seconds</h2>
                <p>Convert words into an image, video, code etc. in mere seconds with out ImaginAIrium platform</p>
                <div className="form-inner">
                  <form method="post" action="/">
                    <div className="form-group d-flex justify-content-start">
                      <button type="submit" className="theme-btn btn-one">Contact</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <div className="image-shape">
                  <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                  <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                    <figure className="image"><img src="assets/images/banner/banner-image-1.jpg" alt="" /></figure>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                    <figure className="image"><img src="assets/images/banner/banner-image-2.jpg" alt="" /></figure>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                    <figure className="image"><img src="assets/images/banner/banner-image-3.jpg" alt="" /></figure>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                    <figure className="image"><img src="assets/images/banner/banner-image-4.jpg" alt="" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}