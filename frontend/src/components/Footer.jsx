import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="siteFooter"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="footerLeft">
          <motion.img
            src="WBN_BlackWhite.png"
            alt="Logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="footerLinks">
          <div className="footerColumn">
            <motion.h4 
              whileHover={{ color: "#d6bb23" }}
              transition={{ duration: 0.2 }}
            >
              Quick Links
            </motion.h4>
            <ul>
              <li>
                <motion.a
                  href="index.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="about.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="contact.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Contact Us
                </motion.a>
              </li>
            </ul>
          </div>

          <div className="footerColumn">
            <motion.h4 
              whileHover={{ color: "#d6bb23" }}
              transition={{ duration: 0.2 }}
            >
              Policies
            </motion.h4>
            <ul>
              <li>
                <motion.a
                  href="privacy-policy.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="terms.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Terms & Conditions
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="return-cancellation.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Return & Cancellation
                </motion.a>
              </li>
            </ul>
          </div>

          <div className="footerColumn">
            <motion.h4 
              whileHover={{ color: "#d6bb23" }}
              transition={{ duration: 0.2 }}
            >
              Services
            </motion.h4>
            <ul>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Membership
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mentorship.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Mentorship
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="safari.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Safaris
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="competition.html"
                  whileHover={{ x: 5, color: "#d6bb23" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Competitions
                </motion.a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerRight">
          <motion.h4 
            whileHover={{ color: "#d6bb23" }}
            transition={{ duration: 0.2 }}
          >
            Follow Us
          </motion.h4>
          <div className="socialIcons">
            <motion.a
              href="https://www.instagram.com/wild_bynature_official"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, 10, -10, 5, 0],
                filter: "drop-shadow(0 0 6px rgba(214, 187, 35, 0.8))"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="instagram-white-logo.png"
                alt="Instagram"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/share/1EJGriQpDN/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, -5, 0],
                filter: "drop-shadow(0 0 6px rgba(214, 187, 35, 0.8))"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="fuk.png"
                alt="Facebook"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/share/1EJGriQpDN/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, 5, -5, 3, 0],
                filter: "drop-shadow(0 0 6px rgba(214, 187, 35, 0.8))"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="you.png"
                alt="YouTube"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        © {new Date().getFullYear()} Wild By Nature. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;