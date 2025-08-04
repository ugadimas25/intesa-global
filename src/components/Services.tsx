import React from 'react';
import { Cloud, Leaf, Shield, BarChart3, Database, CheckCircle } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Cloud size={48} />,
      title: "Climate Solutions",
      description: "Advanced software for climate monitoring, carbon tracking, and environmental impact assessment. Featuring our Global Climate Solution platform.",
      features: [
        "Zero-deforestation compliance monitoring",
        "Geospatial analysis tools",
        "Real-time forest monitoring",
        "EUDR compliance checking"
      ]
    },
    {
      icon: <Leaf size={48} />,
      title: "Environmental Management",
      description: "Comprehensive environmental management systems for sustainable operations.",
      features: [
        "Environmental monitoring",
        "Waste management systems",
        "Resource optimization",
        "Environmental reporting"
      ]
    },
    {
      icon: <Shield size={48} />,
      title: "Compliance Systems",
      description: "Robust compliance management solutions for regulatory requirements.",
      features: [
        "Regulatory compliance tracking",
        "Audit management",
        "Risk assessment tools",
        "Compliance reporting"
      ]
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Data Analytics",
      description: "Powerful analytics and reporting tools for data-driven decisions.",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Custom reporting",
        "Data visualization"
      ]
    },
    {
      icon: <Database size={48} />,
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your specific requirements.",
      features: [
        "Web applications",
        "Mobile solutions",
        "API development",
        "System integration"
      ]
    },
    {
      icon: <CheckCircle size={48} />,
      title: "Consulting Services",
      description: "Expert consultation on environmental technology and compliance strategies.",
      features: [
        "Technology assessment",
        "Implementation planning",
        "Training & support",
        "Best practices guidance"
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive software solutions for climate, environment, and compliance challenges
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <CheckCircle size={16} className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
