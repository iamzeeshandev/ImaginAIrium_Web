'use client'
import Select from 'react-select';
import { useState } from "react";

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

export default function ContactForm() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <section className="contact-section pb_120">
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
    )
}
