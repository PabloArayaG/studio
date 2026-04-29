import {
  MobileStickyHeader,
  HeroSection,
  HeroFormSection,
  ProblemSection,
  SolucionSection,
  ProcesoSection,
  ResultadosSection,
  IntegracionesSection,
  AnaliticaSection,
  FaqSection,
  CtaFinalSection,
} from '../components/get-adereso';

export default function Home() {
  return (
    <main>
      <MobileStickyHeader />
      <HeroSection />
      <HeroFormSection />
      <ProblemSection />
      <SolucionSection />
      <ProcesoSection />
      <ResultadosSection />
      <IntegracionesSection />
      <AnaliticaSection />
      <FaqSection />
      <CtaFinalSection />
    </main>
  );
}
