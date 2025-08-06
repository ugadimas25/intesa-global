import React from 'react';
import { ExternalLink, Globe, CheckCircle, ArrowRight, TreePine, MapPin, BarChart3, Activity } from 'lucide-react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const products = [
    {
      title: "Global Climate Solution",
      description: "A comprehensive geospatial analysis tool designed to support zero-deforestation regulation claims and compliance monitoring. Features interactive mapping, real-time analysis, and multi-standard compliance checking.",
      url: "https://global-comp.vercel.app/",
      image: "/api/placeholder/400/300",
      icon: Globe,
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
    },
    {
      title: "Deforestation Analysis Platform",
      description: "Advanced satellite imagery analysis system for monitoring and detecting deforestation patterns. Provides comprehensive forest cover change detection with temporal analysis and risk assessment capabilities.",
      url: "/products/deforestation-analysis/webmap.html",
      image: "/api/placeholder/400/300",
      icon: TreePine,
      features: [
        "Satellite imagery processing and analysis",
        "Forest cover change detection algorithms",
        "Temporal deforestation pattern analysis",
        "Risk assessment and prediction models",
        "Multi-resolution imagery support",
        "Automated alert system for forest loss",
        "Detailed reporting and visualization tools"
      ],
      technologies: ["Python", "TensorFlow", "GDAL", "PostGIS", "React", "D3.js"],
      category: "Environmental Monitoring",
      status: "Live Production",
      launchDate: "2024",
      clients: "Forest Management & Conservation Organizations",
      developer: "Intesa Global Team",
      dataPartners: ["Landsat", "Sentinel", "MODIS", "Planet Labs"]
    },
    {
      title: "Polygon Verification System",
      description: "Precision geospatial verification platform for validating land boundaries and area calculations. Ensures accuracy in land use mapping and supports legal compliance for territorial claims.",
      url: "/products/polygon-verification/index.html",
      image: "/api/placeholder/400/300",
      icon: MapPin,
      features: [
        "High-precision polygon validation",
        "Area calculation with accuracy metrics",
        "Boundary conflict detection",
        "Multi-format geospatial data import",
        "Legal compliance verification",
        "Automated quality assurance checks",
        "Integration with cadastral systems"
      ],
      technologies: ["PostGIS", "QGIS", "Python", "Shapely", "Geopandas", "Vue.js"],
      category: "Geospatial Verification",
      status: "Live Production",
      launchDate: "2024",
      clients: "Government Agencies & Land Management",
      developer: "Intesa Global Team",
      dataPartners: ["National Land Agencies", "Cadastral Services", "Survey Departments"]
    },
    {
      title: "Carbon Stock Analysis Tool",
      description: "Comprehensive carbon stock assessment platform utilizing advanced remote sensing and field data integration. Supports carbon credit verification and forest carbon monitoring programs.",
      url: "/products/carbon-stock-analysis/index.html",
      image: "/api/placeholder/400/300",
      icon: BarChart3,
      features: [
        "Above-ground biomass estimation",
        "Below-ground carbon stock calculation",
        "LiDAR and optical imagery integration",
        "Carbon credit verification support",
        "REDD+ compliance monitoring",
        "Uncertainty quantification",
        "Multi-temporal carbon change analysis"
      ],
      technologies: ["R", "Python", "Google Earth Engine", "LiDAR Processing", "Machine Learning"],
      category: "Carbon Management",
      status: "Live Production",
      launchDate: "2024",
      clients: "Carbon Credit Organizations & Forest Projects",
      developer: "Intesa Global Team",
      dataPartners: ["IPCC Guidelines", "FAO Forest Resources", "Carbon Standards Bodies"]
    },
    {
      title: "GHG Emissions Dashboard",
      description: "Real-time greenhouse gas emissions monitoring and reporting dashboard. Provides comprehensive tracking, analysis, and reporting capabilities for organizational carbon footprint management.",
      url: "/products/ghg-dashboard/index.html",
      image: "/api/placeholder/400/300",
      icon: Activity,
      features: [
        "Real-time emissions monitoring",
        "Scope 1, 2, and 3 emissions tracking",
        "Interactive data visualization",
        "Automated reporting generation",
        "Compliance standard integration",
        "Carbon footprint trend analysis",
        "Multi-site emissions aggregation"
      ],
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js", "API Integration"],
      category: "Emissions Monitoring",
      status: "Live Production",
      launchDate: "2024",
      clients: "Corporations & Environmental Consultants",
      developer: "Intesa Global Team",
      dataPartners: ["EPA Databases", "IPCC Emission Factors", "Industry Standards Bodies"]
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
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="product-card">
                <div className="product-image">
                  <div className="product-placeholder">
                    <IconComponent size={64} className="product-icon" />
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
                  {product.url !== "#" ? (
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
                  ) : (
                    <div className="btn-disabled">
                      <Globe size={18} />
                      Coming Soon
                    </div>
                  )}
                  <a href="#contact" className="btn-secondary-product">
                    <ArrowRight size={16} />
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            );
          })}
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
