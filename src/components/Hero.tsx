import "./Hero.css";
import whatsappIcon from "../assets/img/hero/whatsapp-icon.webp";
import videoThumbnail from "../assets/img/hero/thumbnail-1.webp";
import img from "../assets/img/hero/whatsapp-icon.svg";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import SupademoEmbed from "./SupademoEmbed";
import { statsigClient } from "../lib/statsig";

type MediaType = "video" | "demo";
const EXPERIMENT_NAME = "landing_media_video_vs_demo";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mediaType, setMediaType] = useState<MediaType>("video");

  const exposureLoggedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const readExperiment = () => {
      const exp = statsigClient.getExperiment(EXPERIMENT_NAME);
      const value = exp.get("media_type", "video") as MediaType;
      const mt: MediaType = value === "demo" ? "demo" : "video";

      if (!cancelled) setMediaType(mt);

      // log exposure SOLO una vez y con el valor final leído
      if (!exposureLoggedRef.current) {
        exposureLoggedRef.current = true;
        statsigClient.logEvent("landing_media_exposed", undefined, {
          media_type: mt,
          experiment: EXPERIMENT_NAME,
        });
      }
    };

    // 1) lectura inmediata
    readExperiment();

    // 2) reintento breve por si initializeAsync terminó justo después
    const t = setTimeout(readExperiment, 300);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  // Si cambia a demo, apaga video
  useEffect(() => {
    if (mediaType === "demo") setIsVideoPlaying(false);
  }, [mediaType]);

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    statsigClient.logEvent("cta_click", undefined, {
      media_type: mediaType,
      cta: "contacto",
      experiment: EXPERIMENT_NAME,
    });

    document.getElementById("contacto")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onPlayVideo = () => {
    if (mediaType !== "video") return;

    setIsVideoPlaying(true);

    statsigClient.logEvent("video_play", undefined, {
      media_type: mediaType,
      experiment: EXPERIMENT_NAME,
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
            onClick={() =>
              statsigClient.logEvent("cta_click", undefined, {
                media_type: mediaType,
                cta: "whatsapp",
                experiment: EXPERIMENT_NAME,
              })
            }
          >
            <img src={img} alt="WhatsApp" /> Pruébalo
          </a>
        </div>

        {mediaType === "demo" ? (
          <div className="hero-video">
            <SupademoEmbed />
          </div>
        ) : (
          <div className={`hero-video ${isVideoPlaying ? "video-playing" : "video-thumbnail-mode"}`}>
            {!isVideoPlaying ? (
              <div className="video-thumbnail" onClick={onPlayVideo}>
                <img src={videoThumbnail} alt="Video preview" fetchPriority="high" />
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5.14v13.72L19 12L8 5.14z" fill="#131415" />
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/FXU6_UKSai0?si=a8XxmDVIpeGEw-BA&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
