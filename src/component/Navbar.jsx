import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skill" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-50 top-0">
    
      <div className="text-2xl font-bold text-[#6f05b8]">#ProtFolio</div>

    
      <ul className="hidden md:flex gap-6 font-bold text-lg text-[#6f05b8]">
        {navItems.map((item, i) => (
          <li key={i} className="group relative">
            <a
              href={item.href}
              className="transition-transform duration-300 group-hover:scale-110"
            >
              {item.name}
            </a>
           
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6f05b8] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

    
      <button
        className="md:hidden text-[#6f05b8] focus:outline-none text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 font-bold text-lg text-[#6f05b8] md:hidden">
          {navItems.map((item, i) => (
            <li key={i} className="group relative">
              <a
                href={item.href}
                className="transition-transform duration-300 group-hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6f05b8] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
