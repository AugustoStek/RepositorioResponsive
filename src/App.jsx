import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import useThemeStore from "./store/themeStore";

import "./styles/layout.css"

const App = () => {
  const { mode } = useThemeStore();

  // 👉 Acá aplicamos la clase al <html>
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;