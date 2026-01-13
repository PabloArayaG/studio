import { useEffect, useRef } from "react";
import { statsigClient } from "../lib/statsig";

const EXPERIMENT_NAME = "landing_media_video_vs_demo";
type Props = { title?: string };

export default function SupademoEmbed({ title = "Demo Studio + Desk" }: Props) {
  const interactionLoggedRef = useRef(false);

  useEffect(() => {
    statsigClient.logEvent("demo_impression", undefined, {
      media_type: "demo",
      experiment: EXPERIMENT_NAME,
    });
  }, []);

  const onFirstInteraction = () => {
    if (interactionLoggedRef.current) return;
    interactionLoggedRef.current = true;

    statsigClient.logEvent("demo_interaction", undefined, {
      media_type: "demo",
      experiment: EXPERIMENT_NAME,
    });
  };

  return (
    <div
      style={{ position: "relative", boxSizing: "content-box", maxHeight: "80vh", width: "100%", aspectRatio: "1.98" }}
      onMouseDown={onFirstInteraction}
      onTouchStart={onFirstInteraction}
      onFocusCapture={onFirstInteraction}
    >
      <iframe
      src="https://app.supademo.com/embed/cmjrnscgs005az80jybweuo8a?embed_v=2&utm_source=embed"
      loading="lazy"
      title={title}
      allow="clipboard-write"
      allowFullScreen
      frameBorder={0}
      style={{ width: "100%", height: "100%", border: "none" }}
      onMouseDown={onFirstInteraction}
      onTouchStart={onFirstInteraction}
      onFocusCapture={onFirstInteraction}
      />
    </div>
  );
}
