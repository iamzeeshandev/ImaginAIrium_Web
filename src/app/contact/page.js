'use client'
import Link from "next/link";
import Select from 'react-select';
import Layout from "@/layout/Layout";
import { useState } from "react";

export default function Contact() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    {/* Contact Form Section */}
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
                    {/* Contact Form Section End */}
                    {/* Contact  Section  */}
                    <section className="contact-section pt_140 pb_140">
                        <div className="auto-container">
                            <div data-animation-box className="sec-title mb_55 centred">
                                <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">
                                    Contact Form
                                </span>
                                <h2>Get in Touch</h2>
                            </div>
                            <div className="form-inner">
                                <form method="post" action="" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="firstName" placeholder="First Name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="lastName" placeholder="Last Name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Your email" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="city" placeholder="City" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="state" placeholder="State" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="zipCode" placeholder="Zip Code" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="age" placeholder="Age" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <select name="gender" id="gender">
                                                <option value="">--Select Gender--</option>
                                                <option value="male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <Select
                                                value={selectedOptions}
                                                onChange={handleChange}
                                                options={options}
                                                isMulti
                                                placeholder="Select Interests"
                                                styles={{
                                                    control: (provided, state) => ({
                                                        ...provided,
                                                        width: '100%',
                                                        minHeight: '50px !important',
                                                        height: 'auto',
                                                        background: '#f4f4f4',
                                                        border: '1px solid #f4f4f4',
                                                        borderRadius: 10,
                                                        fontSize: 16,
                                                        color: '#6e6e6e',
                                                        backgroundClip: 'padding-box',
                                                        padding: '0px 0px 0px 0px',
                                                        margin: 0,
                                                        ...(state.isFocused && { borderColor: '#ccc' }),
                                                    }),
                                                    indicatorsContainer: (provided) => ({
                                                        ...provided,
                                                        minHeight: 50,
                                                        height: 'auto',
                                                        padding: '0px 0px 0px 20px',
                                                    }),

                                                    valueContainer: (provided) => ({
                                                        ...provided,
                                                        minHeight: 50,
                                                        height: 'auto',
                                                        padding: '0px 0px 0px 20px',
                                                    }),

                                                    singleValue: (provided) => {
                                                        return {
                                                            ...provided,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        };
                                                    },

                                                    multiValue: (styles) => {
                                                        return {
                                                            ...styles,
                                                            borderRadius: '5px',
                                                        };
                                                    },

                                                    input: (styles) => {
                                                        return { ...styles, height: '58px !important', margin: '0px' };
                                                    },

                                                }}
                                            />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Type message"></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button className="theme-btn btn-one" type="submit" name="submit-form">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* Contact  Section End */}
                </div>
            </Layout>
        </>
    )
}

const options = [
    { value: 'AI', label: 'AI' },
    { value: 'Data Science', label: 'Data Science' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'Robotics', label: 'Robotics' },
    { value: 'Cloud Computing', label: 'Cloud Computing' },
    { value: 'IoT', label: 'IoT' },
    { value: 'Big Data', label: 'Big Data' },
    { value: 'Block Chain', label: 'Block Chain' },
];