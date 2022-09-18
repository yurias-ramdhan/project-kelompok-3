import React from 'react';

const About = () => {
  return (
    <section id="about" class="bg-slate-100 pt-36">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="order-2 w-full self-end px-4 lg:order-1 lg:w-1/2">
            <div class="mx-auto h-48 w-48 overflow-hidden rounded-full bg-primary lg:right-0 lg:mt-0">
              <img src="img/foto1.png" alt="Yurias Ramdhan" class="h-full w-full object-cover" />
            </div>
          </div>

          <div class="order-1 mb-10 w-full px-4 lg:order-2 lg:w-1/2">
            <h4 class="mb-3 text-lg font-bold uppercase text-primary">Tentang Saya</h4>
            <h2 class="mb-5 max-w-md text-3xl font-bold text-dark lg:text-4xl">Yurias Ramdhan</h2>
            <p class="'font-medium max-w-xl text-justify text-base text-secondary lg:text-lg">Nama saya Yurias Ramdhan. Saya berasal dari Palembang. Saya belajar untuk menjadi Full Stack Developer.</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,101.3C840,64,960,64,1080,90.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default About;
