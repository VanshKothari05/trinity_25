import React from "react";
import "./cultural.css";
import CulturalCard from "./culturalcard";

const Cultural = () => {
  return (
    <>
      <div className="cultural">
        <div className="wrapper">
          <h1 className="culturalHeading">CULTURAL EVENTS</h1>
          <h5>"Where Creativity Meets Tradition!"</h5>
          <div className="text1">
            "After a remarkable journey of creativity and cultural celebration, we’re back with even more! Our cultural events have been a testament to the immense talent, passion, and diversity of our community. With each passing year, we’ve seen incredible performances, unforgettable experiences, and a legacy that continues to inspire. Join us once again to celebrate art, music, dance, and all that makes us unique!"
          </div>
          <div className="scols">
            <CulturalCard
              title="Mr. & Ms. Trinity"
              imageUrl="https://i.postimg.cc/8.png"
              description="Date: 27th March 2025 Venue: TBA"
            />
            <CulturalCard
              title="IDPT Band"
              imageUrl="https://i.postimg.cc/8.png"
              description="Date: 27th March 2025 Venue: TBA"
            />
            <CulturalCard
              title="Fashion Show"
              imageUrl="https://i.postimg.cc/8.png"
              description="Date: 27th March 2025 Venue: TBA"
            />
            <CulturalCard
              title="IDPT Stage Play"
              imageUrl="https://i.postimg.cc/8.png"
              description="Date: 28th March 2025 Venue: TBA"
            />
            <CulturalCard
              title="IDPT Dance"
              imageUrl="https://i.postimg.cc/8.png"
              description="Date: 28th March 2025 Venue: TBA"
            />
            <CulturalCard
              title="IPL Auction"
              imageUrl="https://i.postimg.cc/8.png"
              description="Date: 28th March 2025 Venue: TBA"
            />
            <CulturalCard
              title="Mock Stock"
              imageUrl="https://i.postimg.cc/8.png"
              description="Date: 29th March 2025 Venue: TBA"
            />
            <CulturalCard
              title="Fashion Show"
              imageUrl="https://i.postimg.cc/8.png"
              description="Date: 29th March 2025 Venue: TBA"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cultural;

