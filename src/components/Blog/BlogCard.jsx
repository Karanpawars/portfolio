import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
const navigate = useNavigate();
  return (
    <Card className="blog-card border-0">
      <div className="image-wrapper">
        <Card.Img src={blog.image} />
      </div>
      <Card.Body>
        <div className="blog-meta">
          <span>
            <i className="bi bi-calendar-event"></i>
            {blog.date}
          </span>
          <span>
            <i className="bi bi-tag"></i>
            {blog.category}
          </span>
        </div>
        <h4>{blog.title}</h4>
        <p>{blog.description}</p>
        <button className="read-btn rounded px-3 py-2 d-flex align-items-center" onClick={() => navigate(`/blog/${blog.slug}`)}>
          Read More
          <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;