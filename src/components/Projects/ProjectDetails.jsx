import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

import Navbar from "../Navbar/Navbar";

import Footer from "../Footer/Footer";

import projects from "../../data/projectsData";

const ProjectDetails = () => {

    const { slug } = useParams();

    const project = projects.find(
        item => item.slug === slug
    );

    if(!project){

        return <h2>Project Not Found</h2>

    }

    return(

        <>

        <Navbar/>

        <section className="project-details">

            <Container>

                <img
                    src={project.image}
                    className="img-fluid rounded-4 mb-5"
                    alt={project.title}
                />

                <h1>{project.title}</h1>

                <span>{project.category}</span>

                <hr/>

                <h3>Overview</h3>

                <p>{project.overview}</p>

                <h3>Challenge</h3>

                <p>{project.challenge}</p>

                <h3>Solution</h3>

                <p>{project.solution}</p>

                <h3>Technologies</h3>

                <div className="d-flex gap-3 flex-wrap">

                    {

                        project.technologies.map((tech)=>(

                            <span
                                className="badge bg-primary"
                                key={tech}
                            >
                                {tech}
                            </span>

                        ))

                    }

                </div>

                <h3 className="mt-5">

                    Key Features

                </h3>

                <ul>

                    {

                        project.features.map((feature)=>(

                            <li key={feature}>

                                {feature}

                            </li>

                        ))

                    }

                </ul>

                <h3>

                    Results

                </h3>

                <ul>

                    {

                        project.results.map((result)=>(

                            <li key={result}>

                                {result}

                            </li>

                        ))

                    }

                </ul>

                <a

                    href={project.liveDemo}

                    target="_blank"

                    className="btn btn-primary mt-4"

                >

                    Visit Website

                </a>

            </Container>

        </section>

        <Footer/>

        </>

    )

}

export default ProjectDetails;