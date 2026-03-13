import "./Hero.css";
import whatsappIcon from "../assets/img/hero/whatsapp-icon.webp";
import img from "../assets/img/hero/whatsapp-icon.svg";
import type { MouseEvent } from "react";
import SupademoEmbed from "./SupademoEmbed";

const Hero = () => {
  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <a href="#contacto" onClick={scrollToContact} className="hero-badge">
          <img src={whatsappIcon} alt="WhatsApp" />
          <span>Chatbots con IA para WhatsApp Business</span>
        </a>

        <h1>
          Automatiza hasta 98% de tus<br />
          respuestas por <span className="whatsapp-text">WhatsApp</span>
        </h1>

        <p className="hero-subtitle">
          Chatbots impulsados por IA que entregan respuestas instantáneas y<br />
          personalizadas, automatizando ventas y atención al cliente en WhatsApp
        </p>

        <div className="hero-actions">
          <a href="#contacto" onClick={scrollToContact} className="btn-primary-large">
            Hablar con un experto →
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=56934198980&text=Hola%2C+quiero+saber+sobre+los+productos+de+Adereso&type=phone_number&app_absent=0"
            className="btn-secondary-large"
          >
            <img src={img} alt="WhatsApp" /> Pruébalo
          </a>
        </div>

        <div className="hero-demo">
          <SupademoEmbed />
        </div>
      </div>
    </section>
  );
};

export default Hero;
