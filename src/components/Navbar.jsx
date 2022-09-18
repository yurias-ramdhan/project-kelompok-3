import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // membuat tombol navigasi, ketika dalam mode mobile
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header>
      <div className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="px-4">
              <a href="#home" className="block py-6 text-lg font-bold text-primary">
                Yurias Ramdhan
              </a>
            </div>
            <div className="flex items-center px-4">
              <button onClick={handleNav} type="button" className="absolute right-4 block lg:hidden">
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
              </button>

              <nav className={nav && 'absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none'}>
                <ul className="block pb-5 lg:flex lg:pb-0">
                  <li className="group">
                    <a href="#home" className="mx-8 flex py-2 text-base text-white hover:text-primary">
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a href="#about" className="mx-8 flex py-2 text-base text-white hover:text-primary">
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a href="#skills" className="mx-8 flex py-2 text-base text-white hover:text-primary">
                      Skills
                    </a>
                  </li>
                  <li className="group">
                    <a href="#contact" className="mx-8 flex py-2 text-base text-white hover:text-primary">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
