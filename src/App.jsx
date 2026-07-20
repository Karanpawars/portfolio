import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import ProjectPage from "./components/Projects/ProjectPage";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/process" element={<Process />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;