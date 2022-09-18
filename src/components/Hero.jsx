import Typed from "typed.js";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Yurias Ramdhan"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" class="pt-36">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-center px-4 lg:w-1/2">
            <h1 class="text-base font-semibold text-primary md:text-xl">
              Halo Semua, saya </h1>
            <span class="mt-3 text-4xl text-dark lg:text-5xl" ref={el}></span>
            
            <h2 class="mb-10 text-lg font-medium text-secondary lg:text-2xl">Calon Full Stack Developer</h2>
            <a href="#contact" class="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white hover:opacity-80 hover:shadow-lg">
              Hubungi Saya
            </a>
          </div>
          <div class="w-full self-end px-4 lg:w-1/2">
            <div class="mt-10 lg:right-0 lg:mt-0">
              <img src="img/foto1.png" alt="Yurias Ramdhan" class="mx-auto max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
