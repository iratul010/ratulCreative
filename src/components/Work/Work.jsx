import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjectsAsync } from "../../features/projects/projectsAPI";
const Work = () => {
  const dispatch = useDispatch();
  const { projects, status, isLoading, error } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    console.log(status)
    if (status === 'idle') {
      dispatch(fetchProjectsAsync());
    }
  }, [status, dispatch]);

 if (status === 'loading' || isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (status === 'failed' || error) {
    return <div>Error: {error}</div>;
  }

 
  if (status === 'succeeded') {
    return (
    <section className="workSection">
      <div className="work__item work__item--1">
        <h2 className="work__item--title">{`<Web/>`}</h2>
        <h3 className="work__item--heading">Selected Projects...</h3>
      </div>
      <div className="work__item work__item--2">project 1</div>
    </section>
  );
}
};

export default Work;
