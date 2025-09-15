import React, { useRef, useEffect, useState } from "react";
import Profile_1 from "../assets/Profile_1.JPG";

const About = () => {
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
    id="about"
      ref={containerRef}
      className="mx-auto px-6 md:px-20 py-10 md:py-20 mt-16 w-[95%]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
        <div
          className={`text-center md:text-left transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#6f05b8]">
            About Me
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-[#6f05b8]">Simra Anjum</span>, a
            passionate{" "}
            <span className="font-semibold">Full Stack Web Developer</span>. I
            enjoy building responsive, user-friendly, and scalable web
            applications using the{" "}
            <span className="text-[#6f05b8]">MERN stack</span>. I love solving
            problems with clean code and modern UI/UX design principles.
          </p>
          <p className="mt-4 text-gray-700">
            When I'm not coding, I explore new tech trends and contribute to
            personal projects.
          </p>
        </div>

      
        <div className="second flex justify-center">
          
          <div
            className={`bg-[#e0c4f0] border-[1.5px] border-purple-800 rounded-full p-2 shadow-[0_0_25px_#8e44ad] transition-all duration-700 hover:scale-125 hover:shadow-[0_0_40px_#6f05b8] cursor-pointer ${
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

export default About;
