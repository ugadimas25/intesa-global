import React from 'react';
import { ExternalLink, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const products = [
    {
      title: "Global Climate Solution",
      description: "A comprehensive geospatial analysis tool designed to support zero-deforestation regulation claims and compliance monitoring. Features interactive mapping, real-time analysis, and multi-standard compliance checking.",
      url: "https://global-comp.vercel.app/",
      image: "/api/placeholder/400/300",
      features: [
        "Interactive map viewer with Leaflet.js integration",
        "EUDR (EU Deforestation Regulation) compliance checking",
        "Rainforest Alliance certification monitoring",
        "Forest Stewardship Council (FSC) compliance",
        "GeoJSON, CSV, and WKT data format support",
        "Real-time deforestation alerts and risk assessment",
        "Subscription-based API with multiple tiers"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Leaflet.js", "GeoJSON"],
      category: "Environmental Compliance",
      status: "Live Production",
      launchDate: "2024",
      clients: "Environmental Organizations & Compliance Teams",
      developer: "Intesa Global Team",
      dataPartners: ["Global Forest Watch", "European Space Agency", "OpenStreetMap"]
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Innovative software solutions delivering real value to our clients
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <div className="product-placeholder">
                  <Globe size={64} className="product-icon" />
                  <div className="product-status">
                    <CheckCircle size={16} />
                    <span>{product.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="product-content">
                <div className="product-header-info">
                  <h3 className="product-title">{product.title}</h3>
                  <span className="product-category">{product.category}</span>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <CheckCircle size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="product-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {product.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="product-meta">
                  <div className="meta-item">
                    <strong>Launch:</strong> {product.launchDate}
                  </div>
                  <div className="meta-item">
                    <strong>Target:</strong> {product.clients}
                  </div>
                  <div className="meta-item">
                    <strong>Developer:</strong> {product.developer}
                  </div>
                </div>

                <div className="data-partners">
                  <h4>Data Partners:</h4>
                  <div className="partner-tags">
                    {product.dataPartners.map((partner, partnerIndex) => (
                      <span key={partnerIndex} className="partner-tag">{partner}</span>
                    ))}
                  </div>
                </div>

                <div className="product-actions">
                  <a 
                    href={product.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary-product"
                  >
                    <Globe size={18} />
                    Visit Platform
                    <ExternalLink size={16} />
                  </a>
                  <a href="#contact" className="btn-secondary-product">
                    <ArrowRight size={16} />
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <h3>Interested in Our Solutions?</h3>
          <p>Let's discuss how <span className="highlight-brand">Intesa Global</span> products can help your organization achieve compliance excellence.</p>
          <a href="#contact" className="cta-button">
            Get Started Today
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
