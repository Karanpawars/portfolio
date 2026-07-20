import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import Navbar from "../Navbar/Navbar";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";

import "./_blog.scss";


import blogs from "../../data/blogData";

import BlogCard from "./BlogCard";
import Categories from "./CategoryList";
import PopularPosts from "./PopularPosts";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Website Development Blog | Karan Pawar</title>

        <meta
        name="description"
        content="Read website development tips, SEO strategies and business growth articles."
        />

        <link
        rel="canonical"
        href="https://karanppawar.com/blog"
        />
      </Helmet>
      <Navbar />
      <section className="blog-page mt-5 pt-5">
        <Container>
          <Row className="align-items-center hero-row mt-4">
            <Col lg={12}>
              <h2 className="page-title">Featured Article</h2>
              <h1>
                Insights, Tips & Latest Trends
              </h1>
              <p>
                Helpful articles on Web Development,
                Design, Web Consultation and Business Growth.
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={8}>
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                />
              ))}
            </Col>
            <Col lg={4}>
                <div className="blog-sidebar">
                    <Categories />
                    <PopularPosts />
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

export default Blog;