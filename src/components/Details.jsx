import "../index.css";
import CountUp from "react-countup";

function Details() {
  return (
    <div className="details">
      {/* <div>
        <p> 18th and 19th</p>
        <p> March, 2022 </p>
      </div> */}
      <div className="numbers">
        <div className="details-styling">
          <CountUp end={100} /> {"+"} <br />
          <p>COLLEGES</p>
        </div>
        <div className="details-styling">
          <CountUp end={50} /> {"+"} <br />
          <p>EVENTS</p>
        </div>
        <div className="details-styling">
          <CountUp end={200} /> {"+"} <br />
          <p>WORKFORCE</p>
        </div>
        <div className="details-styling">
          <CountUp end={5000} /> {"+"} <br />
          <p>REGISTRATIONS</p>
        </div>
        <div className="details-styling">
          <CountUp end={20000} /> {"+"} <br />
          <p>FOOTFALL</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
