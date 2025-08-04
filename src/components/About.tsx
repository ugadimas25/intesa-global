import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About <span className="highlight-brand">Intesa Global</span></h2>
          <p className="section-subtitle">
            Leading the way in sustainable technology solutions
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              <span className="highlight-brand">Intesa Global</span> (Integra Tekno Nusa) is a forward-thinking software development 
              company dedicated to creating innovative solutions for the world's most pressing 
              environmental and compliance challenges. We believe technology can be a powerful 
              force for positive change.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              To empower organizations with cutting-edge software solutions that drive 
              environmental sustainability, ensure regulatory compliance, and contribute 
              to a greener, more responsible future for all. We specialize in geospatial 
              analysis, forest monitoring, and compliance automation.
            </p>

            <h3>Why Choose Us</h3>
            <p>
              Our team combines deep technical expertise with a passionate commitment to 
              environmental stewardship. We understand the complexities of climate, 
              environmental, and compliance requirements, and we translate this knowledge 
              into powerful, user-friendly software solutions.
            </p>
          </div>

          <div className="about-values">
            <div className="value-card">
              <Users className="value-icon" />
              <h4>Expert Team</h4>
              <p>Skilled developers with expertise in environmental and compliance technology</p>
            </div>

            <div className="value-card">
              <Target className="value-icon" />
              <h4>Focused Solutions</h4>
              <p>Specialized in climate, environmental, and compliance software development</p>
            </div>

            <div className="value-card">
              <Award className="value-icon" />
              <h4>Quality Driven</h4>
              <p>Committed to delivering high-quality, reliable, and scalable solutions</p>
            </div>

            <div className="value-card">
              <TrendingUp className="value-icon" />
              <h4>Innovation First</h4>
              <p>Leveraging cutting-edge technology to solve tomorrow's challenges today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
