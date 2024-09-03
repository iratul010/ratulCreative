import { useDispatch, useSelector } from "react-redux";
import { fetchProjectsAsync } from "../../features/projects/projectsAPI";
import { GiCrossedSabres } from "react-icons/gi";

import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ( { isOpen,onClose}) => {
  const modalRef = useRef(null);
  const selectedIndex = useSelector((state) => state.projects.selectedIndex);
  const dispatch = useDispatch();
  const { projects, status, isLoading, error } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjectsAsync());
    }
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
  
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [status, dispatch,modalRef, onClose]);

  if (status === "loading" || isLoading) {
    return <div>Loading...</div>;
  }

  if (status === "failed" || error) {
    return <div>Error: {error || "Unexpected error occurred."}</div>;
  }

  let gallery = projects[selectedIndex || 0]?.gallery || [];
  let tech = projects[selectedIndex || 0]?.technologiesUsed ||[];
  gallery.map((img, i) => {
    console.log(img);
  });
  console.log(gallery);
 
  
  if (!isOpen) return null;
  return (
    <div className="modal" id="modal"  >
      <div className="modal__content" ref={modalRef}>
        <div className="modal__left">
          {gallery.map((img, i) => (
            <img
              key={i}
              className={`modal__img modal__img--p${i + 1}`}
              src={`${img}`}
              alt={`project__img--p${i + 1}`}
            />
          ))}
        </div>
        <div className="modal__right">
          <ul className="modal__techList">
          {tech.map((list, i) => (
              <li key={i}>#{list}</li>
            ))}
          </ul>
          <h3 className="modal__heading">{`${
            projects[selectedIndex || 0]?.title
          }`}</h3>
          <p className="modal__project--info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vero delectus quas? Quam voluptatem, similique perspiciatis delectus illo porro atque accusantium nemo, suscipit corrupti sed, nihil nobis quo tenetur est quas consequatur deserunt? Explicabo, debitis illum ut facere culpa blanditiis.</p>

          <button className="modal__button">Site Visit</button>
           <p className="modal__bottom--style"> <span className="style--one"></span><span className="style--two">{`01`}</span></p>
        </div>
      <span className="modal__closed" onClick={onClose}><GiCrossedSabres />
      </span>
      </div>
    </div>
  );
};

export default Modal;
