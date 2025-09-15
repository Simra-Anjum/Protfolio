import React, { useEffect, useState, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

const skillsLeft = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 80 },
  { name: "ReactJS", icon: <FaReact className="text-blue-400" />, level: 85 },
];

const skillsRight = [
  { name: "NodeJS", icon: <FaNodeJs className="text-green-600" />, level: 80 },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-600" />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 70 },
  { name: "NextJS", icon: <SiNextdotjs className="text-black" />, level: 65 },
];

const Skill = () => {
  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState(
    Array(skillsLeft.length + skillsRight.length).fill(0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) return;

    let animationFrame;
    const start = performance.now();
    const duration = 2000;

    const animateLevels = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const newLevels = [
        ...skillsLeft.map((s) => Math.floor(s.level * progress)),
        ...skillsRight.map((s) => Math.floor(s.level * progress)),
      ];
      setAnimatedLevels(newLevels);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateLevels);
      }
    };

    animationFrame = requestAnimationFrame(animateLevels);

    return () => cancelAnimationFrame(animationFrame);
  }, [animate]);

  const renderSkill = (skill, index) => (
    <div
      key={index}
      className="flex items-center gap-4 sm:gap-6 px-2 sm:px-0"
    >
   
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 shadow-md text-2xl transition-transform duration-500 hover:scale-150 hover:shadow-[0_0_18px_#8e44ad]">
        {skill.icon}
      </div>

     
      <div className="flex-1">
        <div className="flex justify-between mb-1 text-sm sm:text-base">
          <span className="font-medium">{skill.name}</span>
          <span className="text-gray-600">{animatedLevels[index]}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${animatedLevels[index]}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div
    id="skill"
      ref={containerRef}
      className="w-full py-12 sm:py-16 flex flex-col items-center mt-12 sm:mt-20 shadow-lg bg-[#F5F1F7] px-4 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-[#6f05b8]">
        ⚡ My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 w-full max-w-6xl">
        <div className="space-y-6">{skillsLeft.map(renderSkill)}</div>
        <div className="space-y-6">{skillsRight.map(renderSkill)}</div>
      </div>
    </div>
  );
};

export default Skill;
