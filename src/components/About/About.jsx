import { Container, Button, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";
import "./_about.scss";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About Karan Pawar | Website Developer Mumbai</title>

				<meta
				name="description"
				content="Learn more about Karan Pawar, a Senior Front-End Developer with 9+ years of experience building high-performance business websites."
				/>

				<link
				rel="canonical"
				href="https://karanppawar.com/about"
				/>
			</Helmet>
			<Navbar />
			<Container className="pt-5 mt-5 mb-4">
				<section className="about-section d-flex flex-column flex-lg-row align-items-start justify-content-between gap-5 h-100 mt-4">
					<div className="about-content w-50 h-100">
						<h2 className="page-title">About Karan Pawar</h2>
						<p>
							I'm Karan Pawar, a Senior Front-End Developer with 9+ years of experience building fast, responsive and SEO-friendly websites for startups, local businesses and enterprises.
						</p>
						<p className="mb-4">
							I specialize in creating websites that not only look professional but also help businesses generate leads, improve their online presence and increase customer engagement.
						</p>
						<ul className="skills-list list-unstyled">
							<li className="mb-1">
								<i className="bi bi-heart-pulse me-3 icon-blue fs-3"></i>
								Clean Code and best practices
							</li>
							<li className="mb-1">
								<i className="bi bi-speedometer me-3 icon-blue fs-3"></i>
								Performance Focused
							</li>
							<li className="mb-1">
								<i className="bi bi-people me-3 icon-blue fs-3"></i>
								Leadership and Mentorship
							</li>
							<li className="mb-1">
								<i className="bi bi-briefcase me-3 icon-blue fs-3"></i>
								Business and Product Oriented
							</li>
						</ul>
						<a role="button" tabndex="0" href="tel:+917045894361" rel="noopener noreferrer" className="btn btn-primary">
							<i className="bi bi-phone me-2"></i>Let's Build Your Website
						</a>
					</div>
					<div className="about-rhs w-50 rounded p-4 h-100">
						<h5>Why I Love Building Websites</h5>
						<p>I believe every business deserves a professional online presence.</p>
						<p>My goal isn't just to design beautiful websites but to help businesses grow through fast, responsive and SEO-friendly digital experiences.
						</p>
						<hr></hr>
						<div className="skills-wrapper d-flex flex-wrap flex-lg-nowrap">
							<ul className="w-100 p-0">
								<li>
									<h5>Frontend</h5>
								</li>
								<li>✔ HTML5</li>
								<li>✔ CSS3</li>
								<li>✔ JavaScript</li>
								<li>✔ React</li>
								<li>✔ TypeScript</li>
								<li>✔ SCSS</li>
							</ul>
							<ul className="w-100 p-0">
								<li>
									<h5>UI</h5>
								</li>
								<li>✔ Bootstrap</li>
								<li>✔ Tailwind</li>
								<li>✔ MAterial UI</li>
								<li>✔ Figma</li>
							</ul>
							<ul className="w-100 p-0">
								<li>
									<h5>Tools</h5>
								</li>
								<li>✔ Git</li>
								<li>✔ VS Code</li>
								<li>✔ WordPress</li>
							</ul>
						</div>
					</div>
				</section>
				<section className="mt-4 mis-vis">
					<Row className="g-2">
						<Col lg={4} md={6}>
							<div className="boxes rounded p-4 h-100">
								<h3>My Mission</h3>
								<span>
									To deliver high-quality software solutions that exceed client expectations and drive business growth.
								</span>
							</div>
						</Col>

						<Col lg={4} md={6}>
							<div className="boxes rounded p-4 h-100">
								<h3>My Vision</h3>
								<span>
									To be a leading software development company known for innovation and excellence.
								</span>
							</div>
						</Col>

						<Col lg={4} md={12}>
							<div className="boxes rounded p-4 h-100">
								<h3>My Values</h3>
								<span>
									Integrity, Excellence, and Customer Satisfaction.
								</span>
							</div>
						</Col>
					</Row>
				</section>
			</Container>
			<Cta />
			<Footer />
		</>
	);
};

export default About;