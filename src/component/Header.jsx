import React, { useRef, useEffect, useState } from "react";
import Profile_1 from "../assets/Profile_1.JPG";

const Header = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
    id="home"
      ref={containerRef}
      className="mx-auto mt-28 px-6 md:px-20 lg:px-40 py-10 md:py-20 w-[95%] bg-[#e0c4f0] rounded-xl shadow-lg"
    >
      
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
   
        <div className="first space-y-4 text-center md:text-left">
          <h1
            className={`text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Hi, I'm <span className="text-purple-700">Simra Anjum</span>
          </h1>

          <h2
            className={`text-xl md:text-2xl font-semibold text-purple-800 mt-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            Full Stack Web Developer
          </h2>

          <p
            className={`text-gray-700 mt-6 text-base md:text-lg transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            I build responsive, scalable, and user-friendly web applications
            using the MERN stack.
          </p>

          <div
            className={`mt-6 flex justify-center md:justify-start gap-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <button className="px-6 py-2 rounded-lg shadow-md text-white transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500">
              View Resume
            </button>
          </div>
        </div>

    
        <div className="second flex justify-center">
        
          <div
            className={`bg-[#e0c4f0] border-[1.5px] border-purple-800 rounded-full p-2 shadow-[0_0_25px_#8e44ad] transition-all duration-700 hover:scale-110 hover:shadow-[0_0_40px_#6f05b8] cursor-pointer ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
           
            <div
              className={`bg-purple-900 rounded-full p-3 transition-all duration-700 hover:scale-105 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
            
              <img
                src={Profile_1}
                alt="Simra"
                className={`rounded-full w-48 h-48 md:w-60 md:h-60 object-cover transition-all duration-700 hover:scale-110 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: "0.6s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
