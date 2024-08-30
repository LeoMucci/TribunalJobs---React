import React from 'react';
import ExploreSection from './ExploreSection';
import ContactSection from './ContactSection';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <footer className="flex overflow-hidden flex-col pt-7 bg-orange-300 border border-solid border-white border-opacity-0">
      <div className="flex flex-col px-20 pt-6 pb-11 w-full rounded-xl bg-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col ml-10 max-w-full w-[941px]">
          <div className="flex flex-wrap gap-5 justify-between items-start w-full max-md:max-w-full">
            <div className="flex gap-10 self-end mt-14 text-black max-md:mt-10">
              <ExploreSection />
              <ContactSection />
            </div>
            <SocialIcons />
          </div>
        </div>
        <hr className="shrink-0 mt-7 max-w-full h-1 border-orange-300 border-solid border-[3px] w-[1266px]" />
        <p className="self-center mt-10 text-base text-black max-md:mt-10">
          © 2024 Tribunal Jobs. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;