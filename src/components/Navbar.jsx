import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow and background
      setScrolled(currentScrollY > 10);

      // Hide navbar on scroll down
      setVisible(currentScrollY < lastScrollY || currentScrollY <= 100);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "/", text: "Home", external: true },
    { href: "/about", text: "About", external: false },
    { href: "/collection", text: "Collection", external: false },
    { href: "#contact", text: "Contact", external: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"}`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <div className="relative">
            {/* You can use this if you want image logo */}
            {/* <img
              src="https://res.cloudinary.com/dxscy1ixg/image/upload/v1749549125/Black_Pink_Cute_Feminine_Coquette_Bow_Fashion_Logo-Photoroom_hnqs5m.png"
              alt="Suhani's Creations"
              className="h-10 w-auto transition-all duration-300"
            /> */}
            <h1 className="text-xl font-medium tracking-tighter leading-none">
              <span className={`transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
                SUHANI'S CREATIONS
              </span>
            </h1>
            <div className="relative">
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-pink-500 transform origin-left transition-all duration-300 ${
                  scrolled ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.external ? (
                <a
                  href={item.href}
                  className={`relative py-2 px-1 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? "hover:text-pink-600 after:bg-pink-600"
                      : "hover:text-yellow-400 after:bg-yellow-400"
                  }`}
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={`relative py-2 px-1 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? "hover:text-pink-600 after:bg-pink-600"
                      : "hover:text-yellow-400 after:bg-yellow-400"
                  }`}
                >
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className={scrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <FaBars className={scrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul
          className={`${
            scrolled ? "bg-white" : "bg-white-900/95"
          } text-center py-4 px-6 space-y-4 backdrop-blur-md text-black`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              {item.external ? (
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                    scrolled
                      ? "hover:bg-gray-100 hover:text-yellow-600"
                      : "hover:bg-gray-800 hover:text-yellow-400"
                  }`}
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={closeMenu}
                  className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                    scrolled
                      ? "hover:bg-gray-100 hover:text-yellow-600"
                      : "hover:bg-gray-800 hover:text-yellow-400"
                  }`}
                >
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
