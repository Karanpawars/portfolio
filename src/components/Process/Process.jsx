import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./_process.scss";
import Navbar from "../Navbar/Navbar";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";

const processSteps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We understand your business, target audience and project goals.",
        content: "✓ Business Analysis, ✓ Competitor Research, ✓ Requirement Gathering"
    },
    {
        number: "02",
        title: "Planning",
        description:
            "We create the project roadmap.",
        content: "✓ Sitemap, ✓ Wireframes, ✓ Feature Planning"
    },
    {
        number: "03",
        title: "UI/UX Design",
        description:
            "Modern and user-friendly interface.",
        content: "✓ Mobile First, ✓ Responsive Layout, ✓ Brand Consistency"
    },
    {
        number: "04",
        title: "Development",
        description:
            "Website development using modern technologies.",
        content: "✓ React, ✓ Bootstrap, ✓ Fast Loading, ✓ SEO Ready"
    },
    {
        number: "05",
        title: "Testing",
        description:
            "Before launch we test everything.",
        content: "✓ Mobile Testing, ✓ Browser Testing, ✓ Performance, ✓ Security"
    },
    {
        number: "06",
        title: "Launch & Support",
        description:
            "Website goes live.",
        content: "✓ Domain Setup, ✓ Hosting, ✓ Analytics, ✓ Free Support"
    },
];

const Process = () => {
    return (
        <>
            <Helmet>
                <title>Website Development Process | Karan Pawar</title>

                <meta
                name="description"
                content="Discover my proven website development process from planning to launch for business websites."
                />

                <link
                rel="canonical"
                href="https://karanppawar.com/process"
                />
            </Helmet>
            <Navbar />
            <section className="process-section mt-5 pt-5">
                <Container>
                    <Row className="align-items-start flex-column-reverse flex-lg-row mt-4">
                        <Col lg={12}>
                            <div className="section-title">
                                <h2 className="page-title">Process</h2>
                                <h2>
                                    From Idea to Launch — A Proven Website Development Process
                                </h2>
                                <p>
                                    Every project follows a structured workflow to ensure quality, speed, transparency and timely delivery.
                                </p>
                            </div>
                            <div className="timeline">
                                {processSteps.map((step) => (
                                    <div className="timeline-item" key={step.number}>
                                        <div className="timeline-number">
                                            {step.number}
                                        </div>
                                        <div className="timeline-content">
                                            <h5>{step.title}</h5>
                                            <p>{step.description}</p>
                                            <p className="mt-2">{step.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <Cta />
			<Footer />
        </>
    );
};

export default Process;