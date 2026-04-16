import React from 'react';
import Image from 'next/image';
 
const CharacterSection = () => {
  return (
    <section className="min-h-[4167px] bg-[#E4DBCD] w-[95%] lg:w-[1435px] mx-auto rounded-[40px] mt-12 mb-12 flex flex-col items-center justify-center p-4 md:p-8" id="character-section">
      <div className="relative w-full max-w-[1345px]">
        <Image
          src="/character/cc2.svg"
          alt="Character Collection"
          width={1345}
          height={4069}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};
 
export default CharacterSection;
