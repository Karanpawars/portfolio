import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_projects.scss";
import education from "../../assets/images/projects/education.png";
import tourstravel from "../../assets/images/projects/tours-travel.jpg";
import fashion from "../../assets/images/projects/fashion.png";
import doctors from "../../assets/images/projects/doctor.jpg";
import ngo from "../../assets/images/projects/ngo.png";
import realestate from "../../assets/images/projects/realestate.png";

const projects = [
    {
        image: education,
        title: "Education",
        category: "Website",
    },
    {
        image: tourstravel,
        title: "Tours & Travel",
        category: "Website",
    },
    {
        image: fashion,
        title: "Fashion & Lifestyle",
        category: "Website",
    },
    {
        image: doctors,
        title: "Doctors",
        category: "Website",
    },
    {
        image: ngo,
        title: "NGO",
        category: "Website",
    },
    {
        image: realestate,
        title: "Real Estate",
        category: "Website",
    },
];

const Projects = () => {
    return (
        <section className="projects-section mb-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="section-content">
                            <span>FEATURED WORK</span>
                            <h2>Recent Projects</h2>
                            <p>
                                Explore some of the professional websites
                                I've designed and developed for businesses
                                across different industries.
                            </p>
                            <Button as={Link} to="/projects" className="btn btn-primary">
                                View All Projects
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Button>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="project-list">
                            {projects.map((item, tabIndex) => (
                                <div className="project-card" key={tabIndex}>
                                    <div className="project-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="project-content">
                                        <h5>{item.title}</h5>
                                        <span>{item.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;