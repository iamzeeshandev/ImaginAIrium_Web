/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix">
              {/* Footer Column 1 */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/"><img src="assets/images/white-logo.png" alt="" /></Link>
                  </figure>
                  <p>Combined with a handy platform and top-notch support from our in-house production team</p>
                  <ul className="social-links clearfix">
                    <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                  </ul>
                </div>
              </div>

              {/* Footer Column 2 */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_60">
                  <div className="widget-title">
                    <h3>Resources</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="#about-us">About</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                      <li><Link href="#pricing">Pricing</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Column 3 */}
              {/* <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Pages</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><Link href="#">Privacy</Link></li>
                      <li><Link href="#">Terms & Conditions</Link></li>
                      <li><Link href="#">Refund Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div> */}

              {/* Footer Column 4 */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget subscribe-widget">
                  <div className="widget-title">
                    <h3>Subscribe Newsletter</h3>
                  </div>
                  <div className="widget-content">
                    <p>Combined with a handy platform and top-notch support from our in-house production team</p>
                    <div className="form-inner">
                      <form method="post" action="contact">
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email Address" required />
                          <button type="submit" className="theme-btn btn-one">Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>Copyright &copy; 2024 <Link href="/">RevolutionAI</Link>, Inc. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
