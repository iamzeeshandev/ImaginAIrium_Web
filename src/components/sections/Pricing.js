'use client'
import Link from "next/link";
import React from 'react';
export default function Pricing() {
  return (
    <section id="pricing" className="pricing-style-two home-5 pb_120 centred p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-42.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-43.png)' }}></div>
      </div>
      <div className="auto-container">
        <div data-animation-box className="sec-title mb_55">
          <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">Subscription Plans</span>
          <h2>Affordable Pricing</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="pricing-table">
                <div className="table-header mb_30">
                  <h3>AI Developer Hub</h3>
                  <p>For student, teacher and developer</p>
                  <h2>$4.99<span> /Month</span></h2>
                  <Link href="index-3" className="theme-btn btn-three">Buy The Plan</Link>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Up to 3000 Images</li>
                    <li>Unlimited Usage</li>
                    <li>Unlimited Community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-two active-block wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="pricing-table">
                <div className="table-header mb_30">
                  <h3>ImaginAIrium</h3>
                  <p>For student, teacher and developer</p>
                  <h2>$9.99<span> /Month</span></h2>
                  <Link href="index-3" className="theme-btn btn-one p_8">Buy The Plan</Link>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Up to 5000 Images</li>
                    <li>Unlimited Usage</li>
                    <li>Unlimited Community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="pricing-table">
                <div className="table-header mb_30">
                  <h3>VIP All Access</h3>
                  <p>For student, teacher and developer</p>
                  <h2>$19.99<span> /Month</span></h2>
                  <Link href="index-3" className="theme-btn btn-three">Buy The Plan</Link>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Up to 7000 Images</li>
                    <li>Unlimited Usage</li>
                    <li>Unlimited Community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="pricing-table">
                <div className="table-header mb_30">
                  <h3>Enterprise</h3>
                  <p>For student, teacher and developer</p>
                  <h2>$499<span> /Month</span></h2>
                  <Link href="index-3" className="theme-btn btn-three">Buy The Plan</Link>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Up to 10000 Images</li>
                    <li>Unlimited Usage</li>
                    <li>Unlimited Community</li>
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
