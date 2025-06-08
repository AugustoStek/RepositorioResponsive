import React from "react";
import aboutData from "../data/About.json";
import "../styles/AboutMe.css";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay,
            ease: "easeOut",
        },
    },
});

const AboutMe = () => {
    return (
        <div className="about-container container my-5">
            <div className="row align-items-stretch h-100">
                {/* Tarjeta de imagen con animación */}
                <motion.div
                    className="col-md-4 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn(0)}
                >
                    <div className="about-card w-100">
                        <img
                            src={aboutData.image}
                            alt="Augusto Stekelberg"
                            className="profile-img"
                        />
                    </div>
                </motion.div>

                {/* Contenido derecho con animaciones en cascada */}
                <motion.div
                    className="col-md-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn(0.3)}
                >
                    <motion.h2 className="mb-4" variants={fadeIn(0.3)}>Sobre mí</motion.h2>
                    <motion.p className="bio" variants={fadeIn(0.4)}>{aboutData.bio}</motion.p>

                    <motion.h4 className="mt-4" variants={fadeIn(0.5)}>Tecnologías</motion.h4>
                    <motion.ul className="tech-list" variants={fadeIn(0.6)}>
                        {aboutData.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </motion.ul>

                    <motion.h4 className="mt-4" variants={fadeIn(0.7)}>Hobbies</motion.h4>
                    <motion.ul className="hobby-list" variants={fadeIn(0.8)}>
                        {aboutData.hobbies.map((hobby, i) => (
                            <li key={i}>{hobby}</li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;
