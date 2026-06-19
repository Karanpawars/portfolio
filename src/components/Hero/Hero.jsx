import { Container, Button } from "react-bootstrap";
import profileImg from "../../assets/images/karan-pawar.png";
import "./_hero.scss";

const Hero = () => {
  return (
    <Container className="pt-5 pb-5 hero-container">
        <section className="hero-section d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between">
            <div className="hero-content">
                <span className="hero-title">Hi, i'm</span>
                <h1 className="hero-title name fw-bold">Karan <span className="text-primary">Pawar</span></h1>
                <h5 className="hero-title mb-2">Front-End Tech Lead | Ui/Ux Expert.</h5>
                <h5 className="hero-title mt-0">9+ Years of Experience</h5>
                <p className="hero-description mt-4 mb-4">I build scalable, high performance web applications<br/> and lead teams to deliver outstanding products.</p>
                <div className="hero-buttons d-flex gap-3">
                    <Button size="" download href="../assets/Karan_Pawar_Frontend_Tech_Lead_Resume.pdf">
                        <i className="bi bi-download me-2"></i>
                        Download Resume
                    </Button>
                    <Button size="" href="tel:+917045894361">
                        <i className="bi bi-phone me-2"></i>
                        Schedule a Call
                    </Button>
                </div>
            </div>
            <div className="hero-image-container mt-0 mb-3 mt-lg-0">
                <img src={profileImg} alt="Hero Image" className="hero-image" />
            </div>
        </section>
        <section className="social-icons d-flex align-items-center gap-4 mt-3">
            <a href="https://github.com/karanpawar" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github fs-2 text-white"></i>
            </a>
            <a href="https://www.linkedin.com/in/karan-pawar-6aa51390/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fs-2 text-white"></i>
            </a>
            <a href="mailto:pawarkaru111@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-envelope-fill fs-2 text-white"></i>
            </a>
        </section>
        <section className="indicators d-flex flex-column flex-lg-row align-items-center mt-3 gap-2">
            <div className="boxes rounded p-4">
                <h2>9+</h2>
                <span>Years of Experience</span>
            </div>
            <div className="boxes rounded p-4">
                <h2>20+</h2>
                <span>Projects Delivered</span>
            </div>
            <div className="boxes rounded p-4">
                <h2>13+</h2>
                <span>Team Size Led</span>
            </div>
            <div className="boxes rounded p-4">
                <h2>100%</h2>
                <span>Client Satisfaction</span>
            </div>
        </section>
    </Container>
  );
};
export default Hero;