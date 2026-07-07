export function MarketingNavbar() {
  return (
    <header className="border-b border-white/5 bg-[#0C0C0D]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <a href="https://adereso.ai" target="_blank" rel="noopener noreferrer">
          <img
            src="/logoadereso.webp"
            alt="Adereso AI"
            className="h-5 w-auto md:h-6"
          />
        </a>
        <a
          href="https://adereso.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-[13px] font-medium text-[rgba(255,255,255,0.55)] transition-colors hover:text-white md:px-0 md:py-0 md:text-[14px]"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          adereso.ai
        </a>
      </div>
    </header>
  )
}
