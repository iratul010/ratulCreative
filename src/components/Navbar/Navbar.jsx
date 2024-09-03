import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const navbar = useRef(null);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

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

  useEffect(() => {
    // Smooth scroll to target element if URL hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    
  }, [location]);
 
  useEffect(()=>{
    
    const navbarLinks = document.querySelectorAll('.navigation__link');
    navbarLinks.forEach((link=>{
      link.addEventListener("click",function(){
        //all remove class
       navbarLinks.forEach(l=> l.classList.remove('navigation__link--active'));
       //single target class add
       link.classList.add('navigation__link--active');
      })
    }))
  },[])
  return (
    <header ref={navbar} className="navbar">
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
            <a href="#header" className="navbar__link">
              Start<span className="navbar__link-code">{"/>"}</span>
            </a>
          </li>
          <li
            className={`navbar__item  ${
              activeIndex === 1 ? "navbar__item--active" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            <a href="#work" className="navbar__link">
              Work<span className="navbar__link-code">{"/>"}</span>
            </a>
          </li>
          <li
            className={`navbar__item  ${
              activeIndex === 2 ? "navbar__item--active" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            <a href="#about" className="navbar__link">
              About<span className="navbar__link-code">{"/>"}</span>
            </a>
          </li>
          <li
            className={`navbar__item  ${
              activeIndex === 3 ? "navbar__item--active" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            <a href="#contact" className="navbar__link">
              Contact<span className="navbar__link-code">{"/>"}</span>
            </a>
          </li>
          <li
            className={`navbar__item  ${
              activeIndex === 4 ? "navbar__item--active" : ""
            }`}
            onClick={() => handleItemClick(4)}
          >
            <a
              href="/public/resume/Ratul Islam.pdf"
              className="navbar__link"
              download
            >
              Resume<span className="navbar__link-code">{"/>"}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label className="navigation__btn" htmlFor="navi-toggle">
          <span className="navigation__icon"> &nbsp; </span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav" aria-label="Main navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#header" className="navigation__link"><span>01.&nbsp;</span>
                Start<span className="navigation__link-code">{"/>"}</span>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#work" className="navigation__link"><span>02.&nbsp;</span>
                Work<span className="navigation__link-code">{"/>"}</span>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#about" className="navigation__link"><span>03.&nbsp;</span>
                About<span className="navigation__link-code">{"/>"}</span>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#contact" className="navigation__link"><span>04.&nbsp;</span>
                Contact<span className="navigation__link-code">{"/>"}</span>
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="/public/resume/Ratul Islam.pdf"
                className="navigation__link"
                download
              ><span>05.&nbsp;</span>
                Resume<span className="navigation__link-code">{"/>"}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
