import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import QuotePage from "./pages/QuotePage";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Stats />
                <About />
                <Projects />
                <Products />
                <Testimonials />
                <Contact />
              </>
            }
          />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/:id" element={<ProjectDetail />} />
          <Route path="/produtos" element={<ProductPage />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/orcamento" element={<QuotePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
