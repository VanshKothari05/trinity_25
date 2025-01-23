import React from "react";
import "./sports.css";
import Card from "./SportsCard";

// Array of events with date info
const events = [
  {
    title: "Badminton",
    imageUrl: "https://i.postimg.cc/CnLkPpqX/badminton.jpg",
    description: "Date: 12th Feb 2025 Venue: Andheri Sports Complex",
    date: "2025-02-12",
  },
  {
    title: "Basketball",
    imageUrl: "https://i.postimg.cc/PCLznHRk/basketball.jpg",
    description: "Date: 20th Feb 2025 Venue: TBA",
    date: "2025-02-20",
  },
  {
    title: "Table-Tennis",
    imageUrl: "https://i.postimg.cc/WF1JyWB6/tabletennis.jpg",
    description: "Date: 17th Feb 2025 Venue: Andheri Sports Complex",
    date: "2025-02-17",
  },
  {
    title: "8 Ball Pool",
    imageUrl: "https://i.postimg.cc/zLjg0ZcG/8ballpool.jpg",
    description: "Date: 18th Feb 2025 Venue: RK Shoot Andheri",
    date: "2025-02-18",
  },
  {
    title: "Chess",
    imageUrl: "https://i.postimg.cc/H8J8YJsr/chess.jpg",
    description: "Date: 11th Feb 2025 Venue: College",
    date: "2025-02-11",
  },
  {
    title: "Cricket Over-Arm",
    imageUrl: "https://i.postimg.cc/ZWP3LFKB/cricket.jpg",
    description: "Date: 24th-25th Feb 2025 Venue: Kaveerni Ground",
    date: "2025-02-24",
  },
  {
    title: "Kabaddi",
    imageUrl: "https://i.postimg.cc/4m9pYRD1/kabaddi.jpg",
    description: "Date: 17th Feb 2025 Venue: Andheri Sports Complex",
    date: "2025-02-17",
  },
  {
    title: "Handball",
    imageUrl: "https://i.postimg.cc/DWLrmghj/handball.jpg",
    description: "Date: 14th Feb 2025 Venue: JP Sports Arena, Malad",
    date: "2025-02-14",
  },
  {
    title: "Football",
    imageUrl: "https://i.postimg.cc/MXXQbLbz/football.jpg",
    description: "Date: 27th Feb 2025 Venue: JP Sports Arena, Malad",
    date: "2025-02-27",
  },
  {
    title: "Cricket-Under-Arm",
    imageUrl: "https://i.postimg.cc/K8V10C2F/cricket-u.jpg",
    description: "Date: TBA Venue: JP Sports Arena, Malad",
    date: "2025-01-01", // TBA - you can set a default date for sorting
  },
  {
    title: "Dodgeball",
    imageUrl: "https://i.postimg.cc/R6pnx19r/dodgeball.jpg",
    description: "Date: 16th Feb 2025 Venue: JP Sports Arena, Malad",
    date: "2025-02-16",
  },
  {
    title: "Volleyball",
    imageUrl: "https://i.postimg.cc/dk9GjVLG/volleyball.jpg",
    description: "Date: 28th Feb 2025 Venue: Gopinath Munde Maidaan",
    date: "2025-02-28",
  },
  {
    title: "Throwball",
    imageUrl: "https://i.postimg.cc/zL5hCXpQ/throwball.jpg",
    description: "Date: TBA Venue: Gopinath Munde Maidaan",
    date: "2025-01-01", // TBA - you can set a default date for sorting
  },
];

const Sports = () => {
  // Sort events by date
  const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="sports">
      <div className="wrapper">
        <h1 className="sportsHeading">TRINITY SPORTS</h1>
        <h5>"Unleash the Athlete Within!"</h5>
        <p>
          "We're back, and bigger than ever! Over the years, our sports events
          have brought together countless participants, fostering a spirit of
          teamwork, competition, and achievement. From thrilling victories to
          unforgettable moments, we've celebrated success on every field, court,
          and track. This year, we continue to raise the bar, welcoming athletes
          from all backgrounds to showcase their skills and strive for greatness!"
        </p>
        <div className="scols">
          {sortedEvents.map((event) => (
            <Card
              key={event.title} // Added a unique key for each Card
              title={event.title}
              imageUrl={event.imageUrl}
              description={event.description}
              extra=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;

