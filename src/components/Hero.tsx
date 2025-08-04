import React from 'react';
import { ArrowRight, Globe, Shield, Leaf } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Innovative Software Solutions for a 
              <span className="text-gradient"> Sustainable Future</span>
            </h1>
            <p className="hero-description">
              <span className="highlight-brand">Intesa Global</span> specializes in developing cutting-edge software solutions 
              for Climate, Environment, and Compliance challenges. Our flagship Global Climate Solution 
              platform provides comprehensive geospatial analysis for zero-deforestation regulation 
              compliance and sustainable forest management.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn-primary">
                View Our Products
                <ArrowRight size={20} />
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="card card-1">
                <Globe size={24} />
                <span>Geospatial Analysis</span>
              </div>
              <div className="card card-2">
                <Leaf size={24} />
                <span>Forest Monitoring</span>
              </div>
              <div className="card card-3">
                <Shield size={24} />
                <span>EUDR Compliance</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stats-row">
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
