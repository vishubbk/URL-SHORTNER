import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#00000060] text-black py-6 mt-10 px-4 border-t border-gray-300">
        {/* Optional additional top line */}
        <hr className="border-gray-300 mb-6" />

        <div className="w-full md:w-4/5 mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          {/* Footer Title and Year */}
          <div>
            <h4 className="text-2xl font-bold tracking-wide mb-1">Shortify</h4>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://github.com/vishubbk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.instagram.com/leptop_tz/?igsh=eDNqeWFkcDEyYzFt#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/instagram--v1.png"
                alt="Instagram"
              />
            </a>
            <a
              href="mailto:vishubbkup@gmail.com"
              className="hover:text-green-500 transition duration-300"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/new-post.png"
                alt="Email"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
