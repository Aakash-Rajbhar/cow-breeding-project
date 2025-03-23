import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import ModernBreeding from './ModernBreeding';
import OurIntroduction from './OurIntroduction';
import ProjectsSection from './ProjectsSection';
import TestimonialSection from './TestimonialSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <HeroSection />
      <OurIntroduction />
      <ModernBreeding />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
