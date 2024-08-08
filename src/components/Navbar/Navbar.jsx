import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navbar = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
  
      if (scrollTop > lastScrollY) {
   
        
        navbar.current.style.top = "-70px"; 
      } else {
     
       
        navbar.current.style.top = "0";
      }
      setLastScrollY(scrollTop);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header ref={navbar} className="navbar"  >
      <div className="navbar__logo">
        <span className="navbar__logo-code">{"<"}</span>Ratul
        <span className="navbar__logo-code">{"/>"}</span>
      </div>
      <nav className="navbar__navigation" aria-label="Main navigation">
        <ul className="navbar__list">
          <li
            className={`navbar__item  ${
              activeIndex === 0 ? "navbar__item--active" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            <a href="#root" className="navbar__link">
              Start<span className="navbar__link-code">{"/>"}</span>
            </a>
          </li>
          <li
            className={`navbar__item  ${
              activeIndex === 1 ? "navbar__item--active" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            <a href="#work" className="navbar__link">Work<span className="navbar__link-code">{"/>"}</span></a>
          </li>
          <li
            className={`navbar__item  ${
              activeIndex === 2 ? "navbar__item--active" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            <a href="#about" className="navbar__link">About<span className="navbar__link-code">{"/>"}</span></a>
          </li>
          <li
            className={`navbar__item  ${
              activeIndex === 3 ? "navbar__item--active" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            <a href="#contact" className="navbar__link">Contact<span className="navbar__link-code">{"/>"}</span></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
