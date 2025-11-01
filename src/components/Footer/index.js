import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-700">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-center px-4">
        <h2 className="text-lg font-semibold tracking-wide uppercase text-cyan-400">
          Connect with Me
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.youtube.com/@DjRamz254thegameattacker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-red-500 transition transform hover:scale-105"
          >
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="YouTube"
            />
            <span>YouTube</span>
          </a>

          <a
            href="https://www.facebook.com/roberto.nyaundi.7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-500 transition transform hover:scale-105"
          >
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
              alt="Facebook"
            />
            <span>Facebook</span>
          </a>

          <a
            href="https://wa.me/254757261120"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-green-500 transition transform hover:scale-105"
          >
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png"
              alt="WhatsApp"
            />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.tiktok.com/@ceoramz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-500 transition transform hover:scale-105"
          >
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png"
              alt="TikTok"
            />
            <span>TikTok</span>
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-white">Robert Nyaundi</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
