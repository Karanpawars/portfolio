import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import whatsupscanner from "../../assets/images/whatsup-contact.jpeg";
import "./_footer.scss";

const whatsup = [
    {
        image: whatsupscanner,
        title: "Whatsup Contact Scanner",
    }
]

const Footer = () => {
  return (
    <footer className="footer text-white mt-4 pb-5 pt-5"> 
        <Container>
            <section className="mt-3 d-flex flex-column justify-content-between flex-lg-row gap-3">
                <div className="columns">
                    <h5 className="mb-3">Karan Pawar</h5>
                    <i className="bi bi-code icon-blue fs-3"></i>
                    <p className="mb-0">Senior Front-End Tech Lead | Ui/Ux Expert.</p>
                    <p className="mb-0">9+ Years of Experience</p>
                    <div className="mt-3">
                        {whatsup.map((item) => (
                            <img src={item.image} alt={item.title} width="100" height="100" className="img-fluid rounded"/>
                        ))}
                    </div>
                </div>
                <div className="columns">
                    <span className="title">Quick Links</span>
                    <div className="d-flex flex-column gap-2 mt-2">
                        <Link to="/" className="text-white text-decoration-none">
                            - Home
                        </Link>

                        <Link to="/about" className="text-white text-decoration-none">
                            - About
                        </Link>

                        <Link to="/process" className="text-white text-decoration-none">
                            - Process
                        </Link>

                        <Link to="/projects" className="text-white text-decoration-none">
                            - Projects
                        </Link>

                        <Link to="/blog" className="text-white text-decoration-none">
                            - Blog
                        </Link>

                        <Link to="/contact" className="text-white text-decoration-none">
                            - Contact
                        </Link>
                    </div>
                </div>
                <div className="columns">
                    <span className="title">Services</span>
                    <div className="d-flex flex-column gap-2 mt-2">
                        <span>- Business Websites</span>
                        <span>- E-Commerce Websites</span>
                        <span>- Landing Pages</span>    
                        <span>- Website Redesign</span>
                        <span>- Website Maintenance</span>
                        <span>- Emailer/Newsletter</span>
                    </div>
                </div>
                <div className="columns">
                    <span className="title">Contact Info</span>
                    <div className="d-flex flex-column gap-2 mt-2">
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-envelope-fill me-3 icon-blue fs-3"></i>
                            <div>
                                <small className="text-muted">Email</small><br/>
                                <a href="mailto:pawarkaru111@gmail.com" className="text-white text-decoration-none">pawarkaru111@gmail.com</a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-telephone-fill me-3 icon-blue fs-3"></i>
                            <div>  
                                <small className="text-muted">Phone</small><br/>
                                <a href="tel:+917045894361" className="text-white text-decoration-none">+91 7045 89 4361</a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-geo-alt-fill me-3 icon-blue fs-3"></i>
                            <div>
                                <small className="text-muted">Location</small>
                                <h6 className="mb-0">Malad East, Mumbai</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <a href="#top" className="btn btn-primary bg-transparent border text-white">
                        <i className="bi bi-arrow-up"></i> Back to Top
                    </a>
                </div>
            </section>
        </Container>
    </footer>
    );
};

export default Footer;