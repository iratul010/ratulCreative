import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import TimeLine from "../components/TimeLine/TimeLine";
 

import Work from "../components/Work/Work";

const Home = () => {
  return (
    <div className="container">
      <TimeLine />
      <Header />
      <Work />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
