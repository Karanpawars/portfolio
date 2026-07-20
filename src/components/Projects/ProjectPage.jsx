import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";
import ProjectCard from "./ProjectCard";

import projects from "../../data/projectsData";

import "./_projects.scss";

const categories = [
  "All",
  "Education",
  "Tours & Travel",
  "Fashion",
  "Doctors",
  "NGO",
  "Real Estate",
  "Sports",
  "Finance",
  "Banking",
  "Others"
];

const ProjectPage = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <>
      <Helmet>
        <title>Website Development Portfolio | Karan Pawar</title>

        <meta
        name="description"
        content="Browse business websites, ecommerce websites, educational websites and React projects developed by Karan Pawar."
        />

        <link
        rel="canonical"
        href="https://karanppawar.com/projects"
        />
      </Helmet>
      <Navbar />

      <section className="projects-page py-5 mt-5">

        <Container className="mt-4">
          <div className="section-title">
              <h2 className="page-title">Our Portfolio</h2>
              <h2>
                  Websites That Help Businesses Grow Online
              </h2>
              <p>
                  Explore websites I've designed and developed for businesses across different industries.
              </p>
          </div>
          <div className="project-tabs mt-3">
                {categories.map((category) => (
                    <button
                    key={category}
                    className={active === category ? "active" : ""}
                    onClick={() => setActive(category)}
                    >
                    {category}
                    </button>
                ))}
            </div>

          <Row className="mt-1">

            {filteredProjects.map((project) => (
              <Col lg={3} md={6} key={project.id} className="mb-4">

                <ProjectCard project={project} />

              </Col>
            ))}

          </Row>

        </Container>

      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default ProjectPage;