const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid"
        />
      </div>

      <div className="content">

        <h6>{project.title}</h6>

        <small className="d-block mb-3 text-muted">{project.category}</small>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="visit-btn"
        >
          <i className="bi bi-globe me-2"></i>Visit Live Website 
          <i className="bi bi-arrow-up-right ms-2"></i>
        </a>

      </div>

    </div>
  );
};

export default ProjectCard;