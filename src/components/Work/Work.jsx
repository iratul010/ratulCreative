import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectsAsync } from "../../features/projects/projectsAPI";
import { FaArrowRight } from "react-icons/fa6";
import { setIndex } from "../../features/projects/projectsSlice";
import Modal from "../Modal/Modal";

const Work = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { projects, status, isLoading, error } = useSelector(
    (state) => state.projects
  );
 
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjectsAsync());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const items = document.querySelectorAll(".works__item");

    const handleMouseMove = (e) => {
      const { offsetX, offsetY, currentTarget } = e;
      const { offsetWidth: width, offsetHeight: height } = currentTarget;

      const rotateX = (offsetY / height - 0.5) * 20;
      const rotateY = (offsetX / width - 0.5) * -20;

      currentTarget.style.transform = `perspective(450px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      currentTarget.style.boxShadow = `
        ${rotateY / 2}px ${rotateX / 2}px 30px rgba(0, 0, 0, 0.3),
        ${rotateY}px ${rotateX}px 60px rgba(0, 0, 0, 0.2)`;
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transition =
        "transform 0.1s ease-out, box-shadow 0.3s ease-out";
    };

    items.forEach((item) => {
      item.addEventListener("mousemove", handleMouseMove);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => {
        item.removeEventListener("mousemove", handleMouseMove);
        item.removeEventListener("mouseleave", handleMouseLeave);
        observer.unobserve(item);
      });
    };
  }, [status, dispatch]);

  if (status === "loading" || isLoading) {
    return <div>Loading...</div>;
  }

  if (status === "failed" || error) {
    return <div>Error: {error || "Unexpected error occurred."}</div>;
  }
  const handleIndex = (index) => {
    dispatch(setIndex(index));
  };

  const openModal = () => {
    console.log("done");
    console.log(isModalOpen);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log("ok");
    setIsModalOpen(false);
  };

  return (
    <div className="work__container" id="work">
      <div className="work__header">
        <h2 className="work__header--title">{`<Web/>`}</h2>
        <h3 className="work__header--selected">Selected Projects...</h3>
      </div>

      {projects.map((project, i) => (
        <div
          key={project.projectId}
          className={`works__item works__item--${i + 1}`}
          onClick={() => {
            handleIndex(i);
            openModal();
          }}
        >
          <h3 className="works__item--title">{project.title}</h3>
          <div className="works__item--box">
            <span className="works__item--count">0{i + 1}</span> &nbsp;
            <span className="works__item--arrow">
              <FaArrowRight />
            </span>
          </div>
          <div
            className="works__item--img"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          ></div>
        </div>
      ))}
      {isModalOpen && <Modal onClose={closeModal}  isOpen={isModalOpen}/>}
    </div>
  );
};

export default Work;
