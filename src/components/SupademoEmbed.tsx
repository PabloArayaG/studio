type Props = { title?: string };

export default function SupademoEmbed({ title = "Demo Studio + Desk" }: Props) {
  return (
    <div
      style={{ position: "relative", boxSizing: "content-box", maxHeight: "80vh", width: "100%", aspectRatio: "1.98" }}
    >
      <iframe
        src="https://app.supademo.com/embed/cmjrnscgs005az80jybweuo8a?embed_v=2&utm_source=embed"
        loading="lazy"
        title={title}
        allow="clipboard-write"
        allowFullScreen
        frameBorder={0}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
