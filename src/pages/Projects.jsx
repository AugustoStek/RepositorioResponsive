import React from "react";
import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";
import useThemeStore from "../store/themeStore";
import "../styles/Projects.css";
import projects from "../data/projects.json";

const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay }
    }
});

const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Projects = () => {
    const { mode } = useThemeStore();
    const isLight = mode === "light";

    return (
        <section className={`projects-page ${isLight ? "light" : "dark"} py-5`}>
            <div className="container">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn()}
                    className="text-center mb-5"
                >
                    Proyectos Destacados
                </motion.h2>

                {/* Sección de tarjetas */}
                <div className="project-card-grid mb-5">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn(index * 0.2)}
                        >
                            <div className="project-card-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-card-image"
                                />
                            </div>
                            <div className="project-card-body text-center">
                                <h5 className="mb-3">{project.title}</h5>
                                <CustomButton
                                    variant="highlight"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToId(`project-detail-${project.id}`);
                                    }}
                                >
                                    Más info
                                </CustomButton>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Separador visual */}
                <div className="project-section-divider my-5"></div>

                {/* Sección de detalle */}
                <div className="project-details">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            id={`project-detail-${project.id}`}
                            className="project-detail-section mb-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn(index * 0.2)}
                        >
                            <h3 className="mb-4 text-center">{project.title}</h3>
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-3 mb-md-0 text-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid rounded shadow"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <p>{project.description}</p>
                                    <CustomButton
                                        to={project.github}
                                        variant="highlight"
                                        className="mt-3"
                                    >
                                        <i className="fab fa-github me-2"></i> Ver en GitHub
                                    </CustomButton>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;