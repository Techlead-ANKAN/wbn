import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const slideRef = useRef(null);
  
  // Brand affiliates data
  const brands = [
    { id: 1, name: "Canon" },
    { id: 2, name: "Nikon" },
    { id: 3, name: "Sony" },
    { id: 4, name: "Fujifilm" },
    { id: 5, name: "Sigma" },
    { id: 6, name: "Tamron" },
    { id: 7, name: "DJI" },
    { id: 8, name: "Manfrotto" }
  ];

  // Initialize slideshow
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        form.reset();
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error submitting the form.');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <div className="slider" ref={slideRef}>
        <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
          <img src="For Website Slider09.jpg" alt="Wildlife 1" />
          <div className="slide-overlay"></div>
          <div className="centered-text">
            <div className="text-container">
              <div className="animated-text">WHERE THE WILD SPEAKS</div>
              <div className="animated-text">THROUGH THE LENS.</div>
            </div>
          </div>
        </div>
        <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
          <img src="For Website Slider01.jpg" alt="Wildlife 2" />
          <div className="slide-overlay"></div>
          <div className="centered-text">
            <div className="text-container">
              <div className="animated-text">CAPTURE NATURE'S</div>
              <div className="animated-text">UNTAMED BEAUTY.</div>
            </div>
          </div>
        </div>
        <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
          <img src="For Website Slider08.jpg" alt="Wildlife 3" />
          <div className="slide-overlay"></div>
          <div className="centered-text">
            <div className="text-container">
              <div className="animated-text">JOURNEY INTO THE</div>
              <div className="animated-text">HEART OF THE WILD.</div>
            </div>
          </div>
        </div>
        <div className={`slide ${currentSlide === 3 ? 'active' : ''}`}>
          <img src="For Website Slider02.jpg" alt="Wildlife 4" />
          <div className="slide-overlay"></div>
          <div className="centered-text">
            <div className="text-container">
              <div className="animated-text">WITNESS NATURE'S</div>
              <div className="animated-text">GRAND SPECTACLE.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>The Wild Has Been Waiting For Someone Like You</h2>
          <p>
            From mentorship to merchandise, curated safaris to camera gear, 
            <strong> Wild by Nature</strong> is your all-in-one platform to explore, 
            capture and protect the natural world.
          </p>
          <a href="about.html" className="cta-button">
            KNOW MORE ABOUT US
          </a>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-header">
          <div className="header-decoration"></div>
          <h1>GALLERY</h1>
          <h2>WHAT WE SEE IS WHAT WE SHARE</h2>
          <p>
            Browse spectacular images captured by our mentors and members. 
            From the big cats to the tiniest insects, explore the diversity 
            of India's wild like never before.
          </p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="image-container">
              <img src="TigersWeb.JPG" alt="Our Prized Mentors" />
              <div className="overlay"></div>
              <div className="caption">Our Prized Mentors</div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="image-container">
              <img src="Let's scroll 2.png" alt="Members Wall" />
              <div className="overlay"></div>
              <div className="caption">Members Wall</div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="image-container">
              <img src="Let's scroll 3.png" alt="Exhibitions" />
              <div className="overlay"></div>
              <div className="caption">Exhibitions</div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="image-container">
              <img src="gallimg4.jpg" alt="Event Albums" />
              <div className="overlay"></div>
              <div className="caption">Event Albums</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <div className="header-decoration"></div>
          <h1>OUR SERVICES</h1>
          <h2>EXPERIENCE WILDLIFE LIKE NEVER BEFORE</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-container">
              <div className="icon-bg"></div>
              <div className="icon">📷</div>
            </div>
            <h3>Workshops</h3>
            <p>Master the art of wildlife photography with our expert-led workshops.</p>
            <a href="workshop.html">Learn More</a>
          </div>
          <div className="service-card">
            <div className="icon-container">
              <div className="icon-bg"></div>
              <div className="icon">✈️</div>
            </div>
            <h3>Tour Operators</h3>
            <p>Professionally guided tours to the best wildlife destinations.</p>
            <a href="tour.html">Learn More</a>
          </div>
          <div className="service-card">
            <div className="icon-container">
              <div className="icon-bg"></div>
              <div className="icon">🏆</div>
            </div>
            <h3>Competitions</h3>
            <p>Showcase your talent in our prestigious photography contests.</p>
            <a href="competition.html">Learn More</a>
          </div>
          <div className="service-card">
            <div className="icon-container">
              <div className="icon-bg"></div>
              <div className="icon">🐘</div>
            </div>
            <h3>Safaris</h3>
            <p>Exclusive wildlife safari experiences in protected reserves.</p>
            <a href="safari.html">Learn More</a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src="WhatsApp Video 2025-07-07 at 17.14.44_cefba55a.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <h2>EXPLORE THE WILD IN MOTION</h2>
            <p>Witness nature's drama unfold through our lens</p>
          </div>
        </div>
      </section>

      {/* Brand Affiliates */}
      <section className="brands-section">
        <div className="section-header">
          <div className="header-decoration"></div>
          <h1>BRAND AFFILIATES</h1>
          <h2>TRUSTED BY THE BEST IN THE INDUSTRY</h2>
        </div>
        <div className="brands-container">
          <div className="brands-track">
            {[...brands, ...brands].map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="brand-item">
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>CONNECT<br />WITH US</h2>
            <p>
              Got a query, a collaboration idea, or just want to join the conversation? 
              Reach out and our team will get back to you shortly.
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> contact@wildbynature.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> 123 Forest Avenue, Bangalore, India</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form onSubmit={handleFormSubmit} action="https://formspree.io/f/xldledew" method="POST">
              <div className="form-group">
                <input type="text" name="firstName" placeholder="Enter your first name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="e.g. Support" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Enter your message" rows="5" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
            {showThankYou && (
              <div className="thank-you-message">
                THANK YOU FOR YOUR MESSAGE! WE'LL CONTACT YOU SOON.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-container">
          <h3>STAY UPDATED WITH OUR WILDLIFE JOURNEY</h3>
          <p>Subscribe to our newsletter for exclusive content and updates</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;