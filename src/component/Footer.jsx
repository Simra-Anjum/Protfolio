import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#6f05b8] text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} Simra Anjum. All Rights Reserved.
        </div>

      
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:simra@example.com"
            className="hover:text-purple-300 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
