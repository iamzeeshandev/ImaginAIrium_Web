import Link from "next/link";

export default function ContactInfo() {
   
    return (
        <section className="contact-info-section centred pt_120 pb_120">
            <div className="auto-container">
                <div data-animation-box className="sec-title mb_55">
                    <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">
                        Contact Info
                    </span>
                    <h2>Contact Information</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                        <div
                            className="info-block-one aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="700"
                        >
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-48"></i></div>
                                <h3>Our Location</h3>
                                <p>4200 W Russell Las Vegas, <br />North Carolina</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                        <div
                            className="info-block-one aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="900"
                        >
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-49"></i></div>
                                <h3>Email Address</h3>
                                <p>
                                    <Link href="mailto:contact@example.com">support@revolutionai.io</Link>
                                    <br />
                                    <Link href="mailto:contact@example.com">{' '}</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                        <div
                            className="info-block-one aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1100"
                        >
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-50"></i></div>
                                <h3>Phone Number</h3>
                                <p>
                                    Emergency Cases <br />
                                    <Link href="tel:2085550112">+(702) 737-8657</Link> (24/7)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
