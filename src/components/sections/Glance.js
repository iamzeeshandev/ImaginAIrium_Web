/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
export default function Glance() {
  return (
    <section className="glance-section centred">
      <div className="auto-container">
        <div className="inner-container">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
            <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
            <div className="pattern-4 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
            <div className="pattern-5 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
          </div>
          <div className="sec-title light mb_80">
            <span className="sub-title">AT A GLANCE</span>
            <h2>The ImaginAIrium at <br />a glance now</h2>
            <p>ImaginAIrium, your gateway to building dreams with the power of Generative AI.</p>
          </div>
          <figure className="image-box"><img src="assets/images/resource/dashboard-ai.jpg" alt="" /></figure>
        </div>
      </div>
    </section>
  );
};

