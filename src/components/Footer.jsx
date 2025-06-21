import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 border-t border-gray-800 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">Nephub</span>
          <span className="hidden md:inline">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex gap-4">
          <a href="/" className="hover:text-orange-400 transition">Home</a>
          <a href="/category" className="hover:text-orange-400 transition">Categories</a>
          <a href="/porn-videos" className="hover:text-orange-400 transition">Videos</a>
          <a href="/community" className="hover:text-orange-400 transition">Community</a>
        </div>
        <div className="text-xs text-gray-600 mt-2 md:mt-0">Made with ❤️ in Nepal</div>
      </div>
    </footer>
  );
}

export default Footer;
