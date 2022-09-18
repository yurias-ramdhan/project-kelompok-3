import React from 'react';

const Skills = () => {
  return (
    <section id="skills" class="pt-36">
      <div class="container pb-32">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 text-center">
            <h4 class="mb-3 text-lg font-bold uppercase text-primary">Skills</h4>
            <h2 class="mb-5 text-3xl font-bold text-dark lg:text-4xl">My Skills</h2>
          </div>
        </div>

        <div class="w-full px-4">
          <div class="flex flex-wrap items-center justify-center">
            <a href="#skills" class="gambar-skills">
              <img src="img/1.png" alt="Youtube" />
            </a>
            <a href="#skills" class="gambar-skills">
              <img src="img/2.png" alt="Oreo" />
            </a>
            <a href="#skills" class="gambar-skills">
              <img src="img/3.png" alt="React Js" />
            </a>
            <a href="#skills" class="gambar-skills">
              <img src="img/4.png" alt="Facebook " />
            </a>
            <a href="#skills" class="gambar-skills">
              <img src="img/5.png" alt="React Js" />
            </a>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(15,23,42)"
          fill-opacity="1"
          d="M0,96L34.3,112C68.6,128,137,160,206,160C274.3,160,343,128,411,106.7C480,85,549,75,617,96C685.7,117,754,171,823,208C891.4,245,960,267,1029,234.7C1097.1,203,1166,117,1234,85.3C1302.9,53,1371,75,1406,85.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Skills;
