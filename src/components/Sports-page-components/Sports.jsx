import React from "react";
import "./sports.css";
import Card from "./SportsCard";

const Sports = () => {
  return (
    <>
      <div className="sports">
        <div className="wrapper">
          <h1 className="sportsHeading">TRINITY SPORTS</h1>
          <h5>Want to register? Scroll down and register yourself</h5>
          <div className="scols">
            <Card
              title="Badminton"
              imageUrl="https://i.postimg.cc/CnLkPpqX/badminton.jpg"
              description="Date: 12th Feb 2025 Venue: Andheri Sports Complex"
              extra=""
            />
            <Card
              title="Basketball"
              imageUrl="https://i.postimg.cc/PCLznHRk/basketball.jpg"
              description="Date: 20th Feb 2025 Venue: TBA"
              extra=""
            />
            <Card
              title="Table-Tennis"
              imageUrl="https://i.postimg.cc/WF1JyWB6/tabletennis.jpg"
              description="Date: 17th Feb 2025 Venue: Andheri Sports Complex"
              extra=""
            />
            <Card
              title="8 Ball Pool"
              imageUrl="https://i.postimg.cc/zLjg0ZcG/8ballpool.jpg"
              description="Date: 18th Feb 2025 Venue: RK Shoot Andheri"
              extra=""
            />
            <Card
              title="Chess"
              imageUrl="https://i.postimg.cc/H8J8YJsr/chess.jpg"
              description="Date: 11th Feb 2025 Venue: College"
              extra=""
            />
            <Card
              title="Cricket Over-Arm"
              imageUrl="https://i.postimg.cc/ZWP3LFKB/cricket.jpg"
              description="Date: 24th-25th Feb 2025 Venue: Kaveerni Ground"
              extra=""
            />
            <Card
              title="Kabaddi"
              imageUrl="https://i.postimg.cc/4m9pYRD1/kabaddi.jpg"
              description="Date: 17th Feb 2025 Venue: Andheri Sports Complex"
              extra=""
            />
            <Card
              title="Handball"
              imageUrl="https://i.postimg.cc/DWLrmghj/handball.jpg"
              description="Date: 14th Feb 2025 Venue: JP Sports Arena, Malad"
              extra=""
            />
            <Card
              title="Football"
              imageUrl="https://i.postimg.cc/MXXQbLbz/football.jpg"
              description="Date: 27th Feb 2025 Venue: JP Sports Arena, Malad"
              extra=""
            />
            <Card
              title="Cricket-Under-Arm"
              imageUrl="https://i.postimg.cc/K8V10C2F/cricket-u.jpg"
              description="Date: TBA Venue: JP Sports Arena, Malad"
              extra=""
            />
            <Card
              title="Dodgeball"
              imageUrl="https://i.postimg.cc/R6pnx19r/dodgeball.jpg"
              description="Date: 16th Feb 2025 Venue: JP Sports Arena, Malad"
              extra=""
            />
            <Card
              title="Volleyball"
              imageUrl="https://i.postimg.cc/dk9GjVLG/volleyball.jpg"
              description="Date: 28th Feb 2025 Venue: Gopinath Munde Maidaan"
              extra=""
            />
            <Card
              title="Throwball"
              imageUrl="https://i.postimg.cc/zL5hCXpQ/throwball.jpg"
              description="Date: TBA Venue: Gopinath Munde Maidaan"
              extra=""
            />
          </div>
        </div>
        <div className="register">
          <button className="custom-btn btn-3">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScXaRpDUHhHbSO9hdnMFoPy2DEIyT4cH6dNWqAP26H88YsPNQ/viewform?usp=sf_link">
              REGISTER
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sports;
