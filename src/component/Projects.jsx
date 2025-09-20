import React, { useEffect, useRef, useState } from "react";


const projectData = [
  { 
    title: "Craze", 
    img: "/project-1.png", 
    description:"Developed a complete e-commerce web app with user authentication, product management, and secure online payments integrated using Stripe API.",
    link:"https://craze-xuik.onrender.com",
    github:"https://github.com/Simra-Anjum/E-commerce.git"
  },
  { 
    title: "LockIt", 
    img: "/project-2.png", 
    description:"Built a secure password manager with user login and encryption logic to safely store and manage credentials.",
    link:"https://lockit-e93l.onrender.com/",
    github:"hhttps://github.com/Simra-Anjum/LockIt.git"
  },
  { 
    title: "TodoList", 
    img: "/project-3.png", 
    description:"Designed a lightweight to-do list application with task creation, deletion, and simple UI for daily task management.",
    link:"https://todolist-xxi8.onrender.com/",
    github:"https://github.com/Simra-Anjum/Todo-project.git"
  },
  { 
    title: "Mobi Pe", 
    img: "/project-4.png", 
    description:"Created a responsive static website for digital mobile payment UI/UX demonstration with clean design and smooth navigation.",
    link:"https://mobi-juur.onrender.com/",
    github:"https://github.com/Simra-Anjum/mobipe.git"
  },
  { 
    title: "PdfX", 
    img: "/project-5.png", 
    description:"Developed a web tool to upload and merge multiple PDF files into a single document with a simple and intuitive interface.",
    link:"https://pdfmerge-aghm.onrender.com",
    github:"https://github.com/Simra-Anjum/pdfTools.git"
  },
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
              <p className="text-sm mb-3 font-bold">
              {project.description} 
              </p>
              <div className="flex justify-center gap-4"> 
    <a
      href={project.link}
      className="px-4 py-2 rounded-lg shadow-md text-white transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500"
    >
      View Project
    </a>
    <a
      href={project.github}
      className="px-4 py-2 rounded-lg shadow-md text-white transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500"
    >
     GIT HUB
    </a>
  </div>
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
                <p className="text-sm mb-3 font-bold">
                  {project.description} 
                </p>
                            <div className="flex justify-center gap-4"> 
    <a
      href={project.link}
      className="px-4 py-2 rounded-lg shadow-md text-white transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500"
    >
      View Project
    </a>
    <a
      href={project.github}
      className="px-4 py-2 rounded-lg shadow-md text-white transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500"
    >
     GIT HUB
    </a>
  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
