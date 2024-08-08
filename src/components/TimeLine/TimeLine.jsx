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
       </div>
    </div>
  );
};

export default TimeLine;