import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "../styles/Home.css";
import profileData from "../data/profile.json";
import CustomButton from "../components/CustomButton";

const Home = () => {
    const [text] = useTypewriter({
        words: [profileData.firstName, profileData.title],
        loop: 0,
        delaySpeed: 2000,
        typeSpeed: 80,
        deleteSpeed: 50,
    });

    return (
        <div className="home-container">
            <h1 className="typewriter-text">
                Hola, soy <span className="highlight-text">{text}</span>
            </h1>
            <p className="intro-text">
                Soy un apasionado de la programación con interés en el desarrollo web,
                guiones creativos y tecnologías emergentes como la inteligencia artificial.
                Actualmente me encuentro perfeccionando mis habilidades en React.
            </p>
            <CustomButton to="/projects" variant="highlight">Mis proyectos</CustomButton>
        </div>
    );
};

export default Home;