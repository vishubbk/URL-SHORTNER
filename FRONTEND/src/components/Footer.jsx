import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-10 px-4">
        <div className="w-full md:w-4/5 mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <div>
            <h4 className="text-xl font-semibold">Shortify</h4>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <a href="https://github.com/vishubbk" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/leptop_tz/?igsh=eDNqeWFkcDEyYzFt#" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram--v1.png" alt="Instagram" />
            </a>
            <a href="mailto:vishubbkup@gmail.com">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png" alt="Email" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

