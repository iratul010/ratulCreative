const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        {/* 1 */}
        <div className="header__content--info-box">
          <span className="header__content--info-cover-1"></span>
          <p className="header__content--info-start">
    
             {`<Start/> `}  
          </p>
        </div>
        <br />
        <div className="header__content--info-box">
          <span className="header__content--info-cover-2"></span>
          <h2 className="header__content--info-header">
            Hi, my name is
            <strong className="header__content--info-highlight">
              Ratul Islam
            </strong>
          </h2>
        </div>
        <br />
        {/* 2 */}
        <div className="header__content--info-box">
          <span className="header__content--info-cover-3"></span>
          <h3 className="header__content--info-profession">
            I developer
            <div className="text-container">
              <div className="text-wrapper">
                <span className="text text1">Frontend</span>
                <span className="text text2">Backend</span>
              </div>
            </div>
          </h3>
        </div>
        <br />
        {/* 3 */}
        <div className="header__content--info-box">
          <span className="header__content--info-cover-4"></span>
          <h4 className="header__content--info-description">
            Let me show you my work...
          </h4>
        </div>
      </div>
      <div className="header-right">
        <img
          className="header-right-img"
          src="/src/assets/images/ratul.png"
          alt="Own Image"
        />
      </div>
    </div>
  );
};

export default Header;
