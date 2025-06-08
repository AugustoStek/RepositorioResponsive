import React from "react";
import CustomButton from "../components/CustomButton";
import "../styles/Contact.css"; // Asegurate de crear este archivo

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensaje enviado");
        e.target.reset();
    };

    return (
        <section className="contact-page py-5">
            <div className="container">
                <h2 className="text-center mb-4">Contacto</h2>

                <form className="contact-form mx-auto" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu email"
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Tu mensaje"
                            rows="5"
                            required
                            className="form-control"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <CustomButton type="submit" variant="highlight">
                            Contactar
                        </CustomButton>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
