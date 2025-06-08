import React from "react";
import aboutData from "../data/About.json";
import "../styles/AboutMe.css";

const AboutMe = () => {
    return (
        <div className="about-container container my-5">
            <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <div className="about-card">
                        <img
                            src={aboutData.image}
                            alt="Augusto Stekelberg"
                            className="profile-img"
                        />
                    </div>
                </div>

                <div className="col-md-8">
                    <h2 className="mb-4">Sobre mí</h2>
                    <p className="bio">{aboutData.bio}</p>

                    <h4 className="mt-4">Tecnologías</h4>
                    <ul className="tech-list">
                        {aboutData.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>

                    <h4 className="mt-4">Hobbies</h4>
                    <ul className="hobby-list">
                        {aboutData.hobbies.map((hobby, i) => (
                            <li key={i}>{hobby}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
