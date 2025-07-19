import React from 'react';
import './Home.css'; // Move all related styles here

const Home = () => {
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 1900); // 2.5 seconds = 2500 milliseconds


  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const emailInput = document.getElementById('email');
  //   const emailValue = emailInput.value.trim();
  //   const agreeTerms = document.getElementById('agree-terms');
  //   const errorBox = document.getElementById('error-message');

  //   // Email format validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(emailValue)) {
  //     errorBox.textContent = '⚠️ Please enter a valid email address.';
  //     return false;
  //   }

  //   // Terms agreement check for signup
  //   if (mode === 'signup' && !agreeTerms.checked) {
  //     errorBox.textContent = '⚠️ Please agree to the Terms and Conditions before continuing.';
  //     return false;
  //   }

  //   errorBox.textContent = '';
  //   alert(mode === 'signup' ? 'Signed Up Successfully!' : 'Logged In Successfully!');
  //   return true;
  // }

  return (
    <>
      {/* SLIDER */}
      <div className="slider">
        <div className="slide active">
          <img src="Hero Banner.png" alt="Wildlife 1" />
          <div className="centered-text">WHERE THE WILD SPEAKS<br />THROUGH THE LENS.</div>
        </div>
        <div className="slide">
          <img src="For Website Slider01.jpg" alt="Wildlife 2" />
          <div className="centered-text">WHERE THE WILD SPEAKS<br />THROUGH THE LENS.</div>
        </div>
        <div className="slide">
          <img src="For Website Slider08.jpg" alt="Wildlife 3" />
          <div className="centered-text">WHERE THE WILD SPEAKS<br />THROUGH THE LENS.</div>
        </div>
        <div className="slide">
          <img src="For Website Slider02.jpg" alt="Wildlife 4" />
          <div className="centered-text">WHERE THE WILD SPEAKS<br />THROUGH THE LENS.</div>
        </div>
      </div>

      {/* WILD HEADING & SUBTEXT */}
      <section className="wild-heading">
        <h2>The Wild Has Been Waiting For Someone Like You</h2>
      </section>
      <section className="wild-subtext">
        <p>
          From mentorship to merchandise, curated safaris to camera gear, <strong>Wild by Nature</strong> is your all-in-one platform to explore, capture and protect the natural world.<br /><br />
          Learn from India's experienced photographers, equip yourself with verified tools, showcase your work, and be part of a conscious, conservation-driven community.<br /><br />
          <strong>Join The Movement Now.</strong>
        </p>
      </section>
      <div className="know-more-button">
        <a href="about.html">KNOW MORE ABOUT US</a>
      </div>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="gallery-text">
          <h1>GALLERY</h1>
          <h2>WHAT WE SEE IS WHAT WE SHARE</h2>
          <p>
            Browse spectacular images captured by our mentors and members. From the big cats to the tiniest insects, explore the diversity of India's wild like never before.
          </p>
        </div>

        <div className="gallery-images">
          <div className="gallery-item">
            <a href="mentorship.html">
              <img src="Let's scroll 1.png" alt="Wildlife 1" />
              <div className="caption-overlay">Our Prized Mentors</div>
            </a>
          </div>

          <div className="gallery-item">
            <a href="memwall.html">
              <img src="Let's scroll 2.png" alt="Wildlife 2" />
              <div className="caption-overlay">Members Wall</div>
            </a>
          </div>

          <div className="gallery-item">
            <a href="exhibition.html">
              <img src="Let's scroll 3.png" alt="Wildlife 3" />
              <div className="caption-overlay">Exhibitions</div>
            </a>
          </div>

          <div className="gallery-item">
            <a href="gallery4.html">
              <img src="gallimg4.jpg" alt="Wildlife 4" />
              <div className="caption-overlay">Event Albums</div>
            </a>
          </div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="grid-section">
        <a href="workshop.html" className="grid-image">
          <img src="Workshop.png" alt="Workshop" />
          <div className="overlay-text">WORKSHOP</div>
        </a>

        <a href="tour.html" className="grid-image">
          <img src="Photo Tour.png" alt="Tour" />
          <div className="overlay-text">TOUR OPERATORS</div>
        </a>

        <a href="competition.html" className="grid-image">
          <img src="Exhibition.png" alt="Competitions" />
          <div className="overlay-text">COMPETITIONS</div>
        </a>

        <a href="safari.html" className="grid-image">
          <img src="Safari Info.png" alt="Safaris" />
          <div className="overlay-text">SAFARIS</div>
        </a>
      </section>

      {/* VIDEO SECTION */}
      <section className="video-section">
        <h2>Explore the Wild in Motion</h2>
        <video autoPlay muted loop playsInline>
          <source src="WhatsApp Video 2025-07-07 at 17.14.44_cefba55a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* BRAND AFFILIATES */}
      <section className="affiliates-section">
        <h1>BRAND AFFILIATES</h1>
        <div className="brand-strip">
          <img src="WhiteLettersTrans2.png" alt="Brand Logo" />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-wrapper">
        <div className="contact-left">
          <h2>CONNECT<br />WITH US</h2>
          <p>
            Got a query, a collaboration idea, or just want to join the conversation?<br /><br />
            Reach out and our team will get back to you shortly.
          </p>
        </div>

        <div className="contact-form-container">
          <form id="launchForm" action="https://formspree.io/f/xldledew" method="POST">
            <h3>Send us a message<br />and we’ll get back to you shortly.</h3>
            <input type="text" name="firstName" placeholder="Enter your first name" required />
            <input type="email" name="email" placeholder="Enter your email" required />
            <input type="text" name="subject" placeholder="e.g. Support" required />
            <textarea name="message" placeholder="Enter text here" rows="5" required></textarea>
            <button type="submit">Send</button>
          </form>
          <div className="thank-you-message" id="thankyoumessage">THANK YOU FOR THE MESSAGE</div>
        </div>
      </section>
    </>
  );
};

export default Home;
