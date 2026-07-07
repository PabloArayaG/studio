export function MarketingFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0C0C0D]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-4 py-8 text-center md:px-6 md:py-10">
        <a href="https://adereso.ai" target="_blank" rel="noopener noreferrer">
          <img
            src="/logoadereso.webp"
            alt="Adereso AI"
            className="h-5 w-auto opacity-70"
          />
        </a>
        <p
          className="text-[13px]"
          style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Work Sans', sans-serif" }}
        >
          © {new Date().getFullYear()} Adereso. Todos los derechos reservados.
        </p>
        <a
          href="https://adereso.ai/politica-de-privacidad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] underline"
          style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Work Sans', sans-serif" }}
        >
          Política de privacidad
        </a>
      </div>
    </footer>
  )
}
