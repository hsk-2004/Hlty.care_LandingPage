import LatestSection from '@/components/sections/character/LatestSection';
import CharacterSection from '@/components/sections/character/CharacterSection';
import CharacterHero from '@/components/sections/character/Hero';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CharacterPage = () => {
  return (
    <main className="min-h-screen bg-[#F0EEE6]">
      <Navbar />
      <CharacterHero />
      <CharacterSection />
      <LatestSection />
      <Footer />
    </main>
  );
};

export default CharacterPage;
