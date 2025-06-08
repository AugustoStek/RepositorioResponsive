import React from "react";
import useThemeStore from "../store/themeStore";
import profile from "../data/profile.json";

const Footer = () => {
    const { mode } = useThemeStore();

    const isLight = mode === "light";

    return (
        <footer className={`text-center py-4 w-100 mt-auto ${isLight ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <div className="container">
                <p className="mb-2">
                    Contact:{" "}
                    <a href={`mailto:${profile.email}`} className={isLight ? 'text-primary' : 'text-info'}>
                        {profile.email}
                    </a>
                </p>
                <h5 className="mb-3">Follow me</h5>
                <div>
                    {profile.socials.map((social) => (
                        <a
                            key={social.name}
                            className={`btn btn-outline-${isLight ? 'primary' : 'info'} btn-sm me-2`}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={social.icon}></i> {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

