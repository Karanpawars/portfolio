import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/hero-image.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./_hero.scss";
import Footer from "../Footer/Footer";

const Hero = () => {
  return (
    <Container className="pt-5 mt-5 hero-container">
        <section className="hero-section d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between">
            <div className="hero-content w-100">
                <h1 className="hero-title name fw-bold">Professional <span className="text-primary">Website Development</span><br/>
                for Businesses That Want<br/>
                <span className="text-primary">More Customers</span>
                </h1>
                <h5 className="hero-title mt-0">9+ Years of Experience</h5>
                <p className="hero-description mt-2 mb-4">I help startups and local businesses build fast,<br/> modern and SEO-friendly websites that attract<br/> more customers and grow their business.</p>
                <div className="hero-buttons d-flex flex-wrap gap-3">
                    <Button size="" href="https://wa.me/917045894361" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-whatsapp me-2"></i>
                        Get a Free Quote
                    </Button>
                    <Button as={Link} to="/projects" className="btn btn-primary">
                        <i className="bi bi-eye me-2"></i>
                        View My Projects
                    </Button>
                </div>
            </div>
            <img src={profileImg} alt="Hero Image" className="hero-image rounded img-fluid" />
        </section>
        <section className="indicators d-flex flex-column flex-md-row flex-lg-row align-items-center mt-3 gap-2">
            <div className="boxes rounded p-4">
                <h2>9+</h2>
                <span>Years Experience</span>
            </div>
            <div className="boxes rounded p-4">
                <h2>20+</h2>
                <span>Websites Delivered</span>
            </div>
            <div className="boxes rounded p-4">
                <h2>13+</h2>
                <span>Happy Clients</span>
            </div>
            <div className="boxes rounded p-4">
                <h2>100%</h2>
                <span>Responsive Design</span>
            </div>
        </section>
    </Container>
  );
};
export default Hero;