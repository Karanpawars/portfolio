import { Container, Row, Col } from "react-bootstrap";
import "./_whyChoose.scss";

const features = [
  {
    icon: "bi-lightning-charge-fill",
    title: "Fast Performance",
    desc: "Lightning-fast websites optimized for speed and user experience.",
  },
  {
    icon: "bi-phone-fill",
    title: "Responsive Design",
    desc: "Looks perfect on mobile, tablet and desktop devices.",
  },
  {
    icon: "bi-search",
    title: "SEO Friendly",
    desc: "Built with SEO best practices to improve Google visibility.",
  },
  {
    icon: "bi-code-slash",
    title: "Modern Development",
    desc: "Built using React, Bootstrap and modern web technologies.",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    title: "On-Time Delivery",
    desc: "Websites delivered within the committed timeline.",
  },
  {
    icon: "bi-headset",
    title: "Support",
    desc: "Free consultation and ongoing technical support.",
  },
];

const WhyChooseMe = () => {
  return (
    <section className="why-choose py-5">
      <Container>

        <div className="section-heading text-center mb-5">
          <span>WHY CHOOSE ME</span>

          <h2>
            Why Businesses Choose My
            <br />
            Web Development Services
          </h2>

          <p>
            I build fast, responsive and SEO-friendly websites
            that help businesses establish a strong online presence.
          </p>
        </div>

        <Row className="g-4">

          {features.map((item, index) => (
            <Col lg={4} md={6} key={index}>

              <div className="feature-card">

                <div className="icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

              </div>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
};

export default WhyChooseMe;