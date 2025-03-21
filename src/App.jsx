import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
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
import BackToTop from "./components/BackToTop";
import PageTransition from "./components/PageTransition";

function App() {
  // Set default theme
  useEffect(() => {
    // Check if user has a preferred theme stored
    const storedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.className = storedTheme;
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
                <Stats />
                <About />
                <Projects />
                <Products />
                <Testimonials />
              </PageTransition>
            }
          />
          <Route
            path="/sobre"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="/projetos"
            element={
              <PageTransition>
                <ProjectsPage />
              </PageTransition>
            }
          />
          <Route
            path="/projetos/:id"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />
          <Route
            path="/produtos"
            element={
              <PageTransition>
                <ProductPage />
              </PageTransition>
            }
          />
          <Route
            path="/produtos/:id"
            element={
              <PageTransition>
                <ProductDetail />
              </PageTransition>
            }
          />
          <Route
            path="/contato"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="/orcamento"
            element={
              <PageTransition>
                <QuotePage />
              </PageTransition>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
