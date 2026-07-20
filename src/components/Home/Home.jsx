import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import WhyChooseMe from "../WhyChooseMe/WhyChooseMe";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import CTA from "../Cta/Cta";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
    <Helmet>
    <title>Website Developer in Mumbai | React Developer | Karan Pawar</title>
    <meta
    name="description"
    content="Professional Website Developer in Mumbai offering responsive business websites, React development, SEO-friendly websites and landing pages."
    />
    <meta
    name="keywords"
    content="Website Developer Mumbai, React Developer Mumbai, Website Designer Mumbai, Business Website, Ecommerce Website"
    />
    <meta
    property="og:title"
    content="Website Developer in Mumbai | Karan Pawar"
    />
    <meta
    property="og:description"
    content="Professional website development services for startups, businesses and enterprises."
    />
    <meta
    property="og:image"
    content="https://karanppawar.com/og-image.jpg"
    />
    <meta
    property="og:url"
    content="https://karanppawar.com"
    />
    <meta
    property="og:type"
    content="website"
    />
    <link
    rel="canonical"
    href="https://karanppawar.com/"
    />
    </Helmet>
      <Navbar />
      <Hero />
      <WhyChooseMe/>
      <Services />
      <Projects />
      <CTA /> 
      <Footer />
    </>
  );
};

export default Home;