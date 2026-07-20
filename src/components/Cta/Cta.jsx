import { Container, Row, Col, Button } from "react-bootstrap";
import "./_cta.scss";

const CTA = () => {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-card">
          <Row className="align-items-center justify-content-between">
            <Col sm={12} md={12} lg={7}>
              <h2>Ready to Grow Your Business Online ?</h2>
              <p>Let's create a fast, scalable and modern website that helps your business grow.</p>
            </Col>
            <Col sm={12} md={12} lg={5} className="d-flex flex-wrap gap-2 justify-content-lg-end justify-content-start">
              <Button className="white-btn p-2 bg-transparent" href="tel:917045894361">
                Get Free Consultation
                <i className="bi bi-arrow-right ms-2"></i>
              </Button>
              <Button className="white-btn p-2 bg-transparent" href="https://wa.me/917045894361" target="_blank">
                <i className="bi bi-whatsapp me-2"></i>
                Chat on WhatsApp
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CTA;