import EnrollForQuizWrapper from "@/components/EnrollForQuiz/EnrollForQuizWrapper";
import ScienceSaysHero from "@/components/Science-Says/ScienceSaysHero/ScienceSaysHero";
import HeartFramework from "@/components/Science-Says/HeartFramework/HeartFramework";
import ObesogenicWorld from "@/components/Science-Says/ObesogenicWorld/ObesogenicWorld";
import PictureThis from "@/components/Science-Says/PictureThis/PictureThis";
import WatchMovement from "@/components/Science-Says/WatchMovement/WatchMovement";

export default function ScienceSays() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <ScienceSaysHero />

      {/* H.E.A.R.T Framework */}
      <HeartFramework />

      {/* Obesogenic World */}
      <ObesogenicWorld />

      {/* Picture This */}
      <PictureThis />

      {/* Watch Movement */}
      <WatchMovement />

      {/* Enroll for Quiz */}
      <EnrollForQuizWrapper />
    </div>
  );
}