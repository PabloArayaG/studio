import { useEffect, useRef, useState } from 'react';

export const SUPADEMO_EMBED_URL =
  'https://app.supademo.com/embed/cmjrnscgs005az80jybweuo8a?embed_v=2&utm_source=embed';

const LOAD_FALLBACK_MS = 8000;

type Props = {
  title?: string;
  className?: string;
  /** When true (default), mount iframe on first render — best for hero/LCP. */
  eager?: boolean;
};

export default function SupademoEmbed({
  title = 'Demo Studio + Desk',
  className = '',
  eager = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(eager);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (mounted) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100vh 0px', threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (!mounted || loaded) return;

    const timeout = window.setTimeout(() => setLoaded(true), LOAD_FALLBACK_MS);
    return () => window.clearTimeout(timeout);
  }, [mounted, loaded]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      aria-busy={mounted && !loaded}
    >
      {mounted && (
        <iframe
          src={SUPADEMO_EMBED_URL}
          title={title}
          allow="clipboard-write"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          onLoad={() => setLoaded(true)}
        />
      )}

      {!loaded && (
        <div aria-hidden="true" className="absolute inset-0 bg-[#1a1a1c]">
          <div className="absolute inset-0 animate-supademo-shimmer bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
      )}
    </div>
  );
}
