import React from 'react';
import "../../CSS/technicalPage.css";  // Import the separate CSS file
import Image from "../../images/8.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Card from '../Sports-page-components/SportsCard';

function Technical() {
  const eventData = [
    { id: 1, name: "Cultural Dance", image: Image, venue: "Main Hall date: 01 Jan 2025 time: 10:00 AM" },
    { id: 2, name: "Singing Competition", image: Image, venue: "Auditorium date: 02 Jan 2025 time: 2:00 PM" },
    { id: 3, name: "Drama Night", image: Image, venue: "Open Stage date: 03 Jan 2025 time: 6:00 PM" },
    { id: 4, name: "Fashion Show", image: Image, venue: "Main Hall date: 04 Jan 2025 time: 8:00 PM" },
    { id: 5, name: "Poetry Slam", image: Image, venue: "Library date: 05 Jan 2025 time: 11:00 AM" },
  ];

  return (
    <div className="technical-page bg-gradient-to-r from-black to-red-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-16 bg-cover bg-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-300 font-bold">
          Technical Events
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          We are back with our competition and lots of memories!
        </p>
      </div>

      {/* Cards Section */}
      <div id="cultural" className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventData.map((event) => {
            return (
              <div className='w-full'>
                <Card
                  title={event.name}
                  imageUrl={event.image}
                  description={event.venue}
                  extra=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technical;


{/* <div key={event.id} className="bg-white bg-opacity-10 border border-yellow-300 rounded-lg shadow-lg p-4">
                <img
                  src={Image}
                  alt="Event"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">
                  {event.name}
                </h3>
                <ul className="text-xs sm:text-sm md:text-base">
                  <li>
                    <LocationOnIcon /> <strong>Venue:</strong> {event.venue}
                  </li>
                  <li>
                    <CalendarTodayIcon /> <strong>Date:</strong> {event.date}
                  </li>
                  <li>
                    <AccessTimeIcon /> <strong>Time:</strong> {event.time}
                  </li>
                </ul>
              </div> */}