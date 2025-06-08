import React from "react";
import "../styles/CustomButton.css";

const CustomButton = ({
    to = null,
    onClick = null,
    children,
    variant = "highlight",
    className = "",
}) => {
    if (to) {
        return (
            <a
                href={to}
                className={`custom-button ${variant} ${className}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`custom-button ${variant} ${className}`}
        >
            {children}
        </button>
    );
};

export default CustomButton;
