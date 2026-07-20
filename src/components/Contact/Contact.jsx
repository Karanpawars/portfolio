import { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { Toast, ToastContainer } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Cta from "../Cta/Cta";
import Footer from "../Footer/Footer";
import "./_contact.scss";



const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email";
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter your message";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        emailjs
            .send(
            "service_alfxr7x",
            "template_3e0djbr",
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            "ry2k4T9fBH1gfUaqd"
            )
            .then(() => {
                setShowToast(true);

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
            console.error(error);
            alert("Failed to send message");
            });
        };

	return (
		<>
            <Helmet>
                <title>Contact Website Developer Mumbai | Karan Pawar</title>

                <meta
                name="description"
                content="Need a business website? Contact Karan Pawar for professional website development and free consultation."
                />

                <link
                rel="canonical"
                href="https://karanppawar.com/contact"
                />
            </Helmet>
			<Navbar />
			<Container className="pt-5 mt-5 mb-3">
				<section className="contact-section d-flex flex-column flex-lg-row justify-content-between gap-5 h-100 mt-4">
					<div className="contact-content w-50 h-100">
						<h2 className="page-title">Get a Professional Website for Your Business</h2>
						<p>
							Need a business website, portfolio or e-commerce store? Let's discuss your requirements and get started today.<br/>
                            ✔ Free Consultation<br/>
                            ✔ Mobile Friendly<br/>
                            ✔ SEO Optimized<br/>
                            ✔ Fast Delivery<br/>
                            ✔ 9+ Years Experience
						</p>
                        <div className="d-flex align-items-center mb-3">
							<i className="bi bi-geo-alt me-3 icon-blue fs-3"></i>
							<div>
								<small className="text-muted">Location</small>
								<h6 className="mb-0">India, Maharashtra Mumbai - Malad</h6>
							</div>
						</div>
                        <div className="d-flex align-items-center mb-3">
							<i className="bi bi-envelope me-3 icon-blue fs-3"></i>
							<div>
								<small className="text-muted">Email</small>
								<h6 className="mb-0">pawarkaru111@gmail.com</h6>
							</div>
						</div>
						<div className="d-flex align-items-center mb-3">
							<i className="bi bi-telephone me-3 icon-blue fs-3"></i>
							<div>
								<small className="text-muted">Phone</small>
								<h6 className="mb-0">+91 9870 3604 31</h6>
							</div>
						</div>
                        <div className="d-flex align-items-center mb-3">
							<i className="bi bi-clock me-3 icon-blue fs-3"></i>
							<div>
								<small className="text-muted">Availability</small>
								<h6 className="mb-0">Monday - Saturday</h6>
							</div>
						</div>
					</div>
					<div className="contact-rhs w-50 rounded p-4 h-100">
						<h5>Send me a message</h5>
						<form className="mt-4 validate-form needs-validation" noValidate onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
                                {errors.name && (
                                <div className="text-danger small">
                                    {errors.name}
                                </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
                                {errors.email && (
                                <div className="text-danger small">
                                    {errors.email}
                                </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Enquiry <span className="text-danger">*</span></label>
                                <textarea className="form-control" id="message" rows="7" placeholder="Enter your message" required value={formData.message} onChange={handleChange}></textarea>
                                {errors.message && (
                                <div className="text-danger small">
                                    {errors.message}
                                </div>
                                )}
                            </div>
                            <Button type="submit" className="btn btn-primary">
                                <i className="bi bi-envelope me-2"></i>
                                Get Free Consultation
                            </Button>
                        </form>
					</div>
				</section>
			</Container>
            <Cta />
			<Footer />
            <ToastContainer
                position="top-center"
                className="p-3"
                style={{ zIndex: 9999 }}
            >
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={4000}
                    autohide
                    bg="success"
                >
                    <Toast.Header closeButton>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>

                    <Toast.Body className="text-white">
                        🎉 Your message has been sent successfully. I'll get back to you soon.
                    </Toast.Body>
                </Toast>
            </ToastContainer>
		</>
	);
};

export default Contact;