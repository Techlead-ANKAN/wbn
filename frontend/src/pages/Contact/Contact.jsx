import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Banner Section */}
            <section className="banner-section">
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <h1 className="banner-title">
                        WE ARE ALWAYS HERE TO<br />HELP YOU
                    </h1>
                </div>
            </section>

            {/* Google Map */}
            <section className="map-section">
                <div className="map-wrapper">
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.847835281216!2d88.35903757505045!3d22.58547133293664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aa93a74f87%3A0x14e2934e63e9c7ae!2s112%2C%20Chittaranjan%20Ave%2C%20College%20Square%2C%20Kolkata%2C%20West%20Bengal%20700073!5e0!3m2!1sen!2sin!4v1720431656983!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            {/* Contact Interface */}
            <section className="contact-section">
                <div className="section-header">
                    <h2>Get in Touch</h2>
                    <p className="section-subtitle">
                        We're always ready to answer your questions and help you plan your journey with us.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info Column */}
                    <div className="contact-info">
                        <h3>Contact Details</h3>

                        <div className="info-group">
                            <h4>Phone</h4>
                            <p><strong>Office:</strong> 9674452988</p>
                            <p><strong>Mentor Support:</strong> 6293001100</p>
                            <p><strong>Landline:</strong> +91-33-22410531 / 2918</p>
                        </div>

                        <div className="info-group">
                            <h4>Email</h4>
                            <p>info@wildbynature.co.in</p>
                            <p>mentorsupport@wildbynature.co.in</p>
                            <p>phototours@wildbynature.co.in</p>
                        </div>

                        <div className="info-group">
                            <h4>Address</h4>
                            <p>
                                Wild By Nature Global Pvt Ltd<br />
                                112, Chittaranjan Avenue,<br />
                                Kolkata 700073, India
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="contact-form">
                        <h3>Send Us a Message</h3>
                        <form
                            id="contactForm"
                            action="https://formspree.io/f/xldledew"
                            method="POST"
                            target="_blank"
                        >
                            <div className="form-group">
                                <label htmlFor="fname">First Name*</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    required
                                    placeholder="Your first name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Support / Query"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Write your message here"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>

                        <div id="thankYou" className="thank-you-message">
                            Thank you! Your message has been sent.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;