import React, { useEffect, useRef, useState } from "react";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.png";
import bg4 from "../assets/bg-4.png";

const projectData = [
  { title: "Project 1", img: bg1 },
  { title: "Project 2", img: bg2 },
  { title: "Project 3", img: bg3 },
  { title: "Project 4", img: bg4 },
  { title: "Project 5", img: bg1 },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.8 } 
    );

    const cards = containerRef.current.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [visibleIndexes]);

  return (
    <div
    id="project"
      ref={containerRef}
      className="w-full py-10 mt-4 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-10 text-[#6f05b8]">✨ My Projects</h2>

      <div className="flex flex-wrap justify-center gap-10 mb-8">
        {projectData.slice(0, 3).map((project, index) => (
          <div
            key={index}
            data-index={index}
            className={`project-card relative w-80 h-52 bg-[#e0c4f0] rounded-xl shadow-lg overflow-hidden transform transition duration-500 group hover:scale-105 hover:shadow-[0_0_25px_#8e44ad]
              opacity-0 ${visibleIndexes.includes(index) ? "animate-fadeIn opacity-100" : ""}`}
            style={{ transitionDelay: `${index * 0.3}s` }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 left-0 w-full text-center text-white font-bold drop-shadow-lg">
              {project.title}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm mb-3">
                Short description of {project.title}.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {projectData.slice(3, 5).map((project, index) => {
          const idx = index + 3;
          return (
            <div
              key={idx}
              data-index={idx}
              className={`project-card relative w-80 h-52 bg-[#e0c4f0] rounded-xl shadow-lg overflow-hidden transform transition duration-500 group hover:scale-105 hover:shadow-[0_0_25px_#8e44ad]
                opacity-0 ${visibleIndexes.includes(idx) ? "animate-fadeIn opacity-100" : ""}`}
              style={{ transitionDelay: `${idx * 0.3}s` }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 left-0 w-full text-center text-white font-bold drop-shadow-lg">
                {project.title}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm mb-3">
                  Short description of {project.title}.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
