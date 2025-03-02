import React from "react";

const Navbar = () => {
  const navigationItems = [
    { label: "About me", href: "#about-me" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" }
  ];

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Sankalp021
          </span>
        </a>

        {/* Updated navigation with better mobile responsiveness */}
        <div className="flex items-center">
          <nav className="hidden md:block">
            <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mx-4 hover:text-purple-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-[#7042f861] rounded-lg transition-colors duration-300">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Optional: Add social links or contact button */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:snklp21@gmail.com"
            className="px-4 py-2 rounded-full border border-[#7042f861] hover:bg-[#7042f861] transition-colors duration-300 text-gray-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
