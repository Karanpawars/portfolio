import { Container, Row, Col } from "react-bootstrap";
import "./_services.scss";

const services = [
  {
    icon: "bi bi-window-sidebar",
    title: "Business Websites",
    description:
      "Professional websites that build trust and attract more customers.",
  },
  {
    icon: "bi bi-cart3",
    title: "E-Commerce Websites",
    description:
      "Powerful online stores to sell your products and grow revenue.",
  },
  {
    icon: "bi bi-layout-text-window",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed for marketing campaigns.",
  },
  {
    icon: "bi bi-brush",
    title: "Website Redesign",
    description:
      "Modern redesigns that improve performance and user experience.",
  },
  {
    icon: "bi bi-tools",
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and maintenance to keep your website secure.",
  },
  {
    icon: "bi bi-envelope",
    title: "Emailers & Newsletters",
    description:
      "Engaging email campaigns and newsletters to keep your audience informed and engaged.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <Container>

        <div className="section-heading text-center">
          <span>SERVICES</span>
          <h2>Website Solutions That Drive Business Growth</h2>
        </div>
        <Row className="g-4 mt-3">
          {services.map((service, tabIndex) => (
            <Col key={tabIndex} xs={12} sm={6} lg={4}>
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;