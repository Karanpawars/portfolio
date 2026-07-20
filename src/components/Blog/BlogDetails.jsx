import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import blogs from "../../data/blogData";
import Navbar from "../Navbar/Navbar";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";

const BlogDetails = () => {

    const { slug } = useParams();

    const blog = blogs.find(item => item.slug === slug);

    if (!blog) {
        return <h2>Blog Not Found</h2>;
    }

    return (
        <>
            <Navbar />
            <section className="blog-details mt-5 pt-5">
                <Container>
                    <img src={blog.image} alt={blog.title} className="img-fluid blog-banner rounded"/>
                    {blog.content.map((section, index) => (
                    <section key={index} className="mb-4">
                        <h2>{section.heading}</h2>

                        {section.paragraphs.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                        ))}
                    </section>
                    ))}
                    <div className="faq-section mt-5">
                        <h2 className="mb-4">Frequently Asked Questions</h2>
                        <Accordion defaultActiveKey="0" flush>

                            {blog.faq.map((item, index) => (

                                <Accordion.Item
                                    eventKey={index.toString()}
                                    key={index}
                                >

                                    <Accordion.Header>
                                        {item.question}
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        {item.answer}
                                    </Accordion.Body>

                                </Accordion.Item>

                            ))}

                        </Accordion>

                    </div>
                </Container>
            </section>
            <Cta />
            <Footer />
        </>
    );
};

export default BlogDetails;