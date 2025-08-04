import React from 'react';
import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand">
              <Leaf className="footer-logo" />
              <span className="brand-name"><span className="highlight-brand">Intesa Global</span></span>
            </div>
            <p className="brand-description">
              Leading software development company focused on Climate, Environment, 
              and Compliance solutions. Building a sustainable future through technology.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Github">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Climate Solutions</a></li>
                <li><a href="#services">Environmental Management</a></li>
                <li><a href="#services">Compliance Systems</a></li>
                <li><a href="#services">Data Analytics</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#portfolio">Products</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <Mail size={16} />
                  <span>info@intesaglobal.com</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>+62 21 1234 5678</span>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} <span className="highlight-brand">Intesa Global</span> (Integra Tekno Nusa). All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
