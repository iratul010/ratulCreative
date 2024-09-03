import { GiBurningDot } from "react-icons/gi";
import { CgMouse } from "react-icons/cg";
 


const TimeLine = () => {
  return (
    <div className="timeline">
       <div className="child">
        <div className="start"><GiBurningDot /></div>
        <div className="scroll"><CgMouse />
        
        </div>
        <p className="scroll-text">SCROLL</p>
        <div className="bullet--1 project"> 
        </div>
        <div className="bullet--2 about"> 
        </div>
        <div className="bullet--3 contact"> 
        </div>
       </div>
    </div>
  );
};

export default TimeLine;