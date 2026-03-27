import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PodcastSection from '@/components/PodcastSection';
import ProgramsGrid from '@/components/ProgramsGrid';
import KindlabSection from '@/components/KindlabSection';
import KindmakersChallenge from '@/components/KindmakersChallenge';
import PartnershipsSection from '@/components/PartnershipsSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 1b: The Freetown Reality (The Need) */}
        <PodcastSection />

        {/* Section 2: Our Pillars of Power (The Solution) */}
        <ProgramsGrid />

        {/* Section 3: Narrative of Resilience (Impact Story) */}
        <KindlabSection />

        {/* Section 4: Be the Architect of a Future (Get Involved) */}
        <KindmakersChallenge />

        {/* Section 5: Radical Transparency (Trust Signals) */}
        <PartnershipsSection />
      </main>
      <Footer />
    </>
  );
}
