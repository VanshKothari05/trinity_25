import React from "react";
import "../../CSS/EventsPage.css"; // Import the separate CSS file
import imagecultural from "../../resources/images/cultural_event.png";

const events = [
  {
    id: 1,
    eventName: "Cultural Events",
    image: imagecultural,
    link: "/cultural",
  },
  {
    id: 2,
    eventName: "Technical Events",
    image: imagecultural,
    link: "/technical",
  },
  {
    id: 3,
    eventName: "Sports Events",
    image: imagecultural,
    link: "/sports",
  },
];

export default function EventsPage() {
  return (
    <div className="events-page bg-gradient-to-r from-black to-red-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py=16 bg-cover bg-center ">
        <h1 className="text-4xl sm:text-4xl md:text-5xl text-yellow-300 font-bold mt-0 ">
          Events 2025
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          We are back with our compeitiion and lot of memories!
        </p>
      </div>

      {/* Cards Section */}
      <div id="events" className="container mx-auto py-12 px-6 w-full">
      <div className="flex flex-wrap justify-center gap-8">
  {events.map((event) => (
    <a href={event.link} className="block no-decoration">
      <div className="bg-white bg-opacity-50 rounded-lg text-center p-6 shadow-lg w-full sm:w-96 md:w-112 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105">
        <img
          src={event.image}
          alt="Cultural Events"
          className="rounded-lg w-full h-64 object-cover mb-6"
        />
        <h3 className="text-xl font-bold">{event.eventName}</h3>
      </div>
    </a>
  ))}
</div>

      </div>
    </div>
  );
}
