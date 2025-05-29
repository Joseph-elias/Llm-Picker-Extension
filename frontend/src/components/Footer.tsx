import React from "react";

const Footer = () => {
  return (
    <footer className="mt-6 text-sm text-center text-gray-500">
      <p className="mb-2">Developed by Joseph Elias Al Khoury</p>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/joseph-elias" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/joseph-elias-al-khoury-0a54a8239/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
