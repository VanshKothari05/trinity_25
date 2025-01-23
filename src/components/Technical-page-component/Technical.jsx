import React from "react";
import "./technical.css"; // Import the separate CSS file
import Card from "./TechnicalCard";

const Technical = () => {
  return (
    <div className="sports">
      <div className="wrapper">
        <h1 className="sportsHeading">TECHNICAL EVENTS</h1>
        <h5>"Pioneering Tomorrow with Innovation!"</h5>
        <p>"We are back, pushing the boundaries of innovation! Over the years, our technical events have ignited curiosity, inspired new ideas, and shaped the minds of future tech leaders. From groundbreaking projects to industry-relevant challenges, we’ve seen incredible achievements that have made an impact. This year, we are more excited than ever to bring together brilliant minds to explore, create, and transform the future of technology."</p>
        <div className="scols">
          {/* Add your event data below */}
          <Card
            title="Cultural Dance"
            imageUrl="https://i.postimg.cc/CnLkPpqX/badminton.jpg"
            description="Date: 01 Jan 2025 Venue: Main Hall"
            extra=""
          />
          <Card
            title="Singing Competition"
            imageUrl="https://i.postimg.cc/PCLznHRk/basketball.jpg"
            description="Date: 02 Jan 2025 Venue: Auditorium"
            extra=""
          />
          {/* Repeat this for all other events */}
        </div>
      </div>
    </div>
  );
};

export default Technical;
