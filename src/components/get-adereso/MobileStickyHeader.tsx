import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileStickyHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#0C0C0D]/90 backdrop-blur-md border-b border-white/5"
        >
          <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-6 py-3">
            <a href="https://adereso.ai" target="_blank" rel="noopener noreferrer">
              <img
                src="/logoadereso.webp"
                alt="Adereso AI"
                className="h-5 md:h-6 w-auto"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-2.5 bg-[#FFD540] hover:bg-[#FFE37A] text-black text-[13px] md:text-[14px] font-medium rounded-full transition-all duration-200"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Hablar con un experto
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
