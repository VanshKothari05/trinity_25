import React from "react";

const HomePage = () => {
  const playAudio = () => {
    const audio = document.getElementById("myAudio");
    audio
      .play()
      .then(() => {
        console.log("Audio is playing in a loop");
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  };

  return (
    <div className="relative">
      {/* Play Button */}
      <button id="playButton" className="fixed bottom-5 right-5 text-3xl" onClick={playAudio}>
        🔊
      </button>

      {/* <audio id="myAudio">
        <source src="./thunder.mp3" type="audio/mpeg" />
      </audio> */}

      {/* Background */}
      <div id="container" className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Main Content */}
      {/* <div id="heading" className="section text-center text-white pt-32 pb-20">
        <img src="./trinity-cropped.png" alt="Company Logo" className="max-w-lg mx-auto mb-4" />
        <p className="text-lg">is back to ignite your passion and creativity</p>
        <p className="text-2xl mt-4">27th-29th MARCH 2025</p>
      </div> */}

      {/* <audio id="background-audio" autoPlay loop>
        <source src="./thunder.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio> */}

      {/* About Us Section */}
      <div id="about" className="section bg-black text-white py-12 px-6">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full lg:w-3/5 text-left px-4">
            <h2 className="text-5xl text-teal-400 mb-4">About Us</h2>
            <p className="text-lg leading-relaxed mb-4">
              Trinity embodies the spirit of D.J. Sanghvi as the most
              anticipated and cherished annual socio-cultural, sports and
              technical festival. Trinity is a coalescence of innovation and
              technology, festivities and social responsibilities, and the
              competitive streak of sports. The grandeur of Trinity is sure to
              attract students not only from Mumbai but from colleges all around
              the world.
            </p>
            <p className="text-lg leading-relaxed">
              The coveted IDPT trophy will be fought for by the students of the
              college. The department who shows exemplary teamwork and
              dedication will be the ones to lift this trophy. We are bound to
              have clashes between departments during the fest, but that will
              just make everyone hungrier to win it. The winner will take home
              bragging rights for a year, whereas those who don’t win will have
              that extra bit of motivation for next year. But remember the most
              important thing is to participate because as the saying goes, you
              either win or you learn.
            </p>
          </div>
          <div className="w-full lg:w-2/5 text-center px-4 mb-8 lg:mb-0">
            <img
              src="./trinity-cropped.png"
              alt="Trinity Logo"
              className="max-w-xs mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Principal's Message Section */}
      <div
        id="principal-section"
        className="section bg-black text-white py-12 px-6"
      >
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full lg:w-2/5 text-center px-4 mb-8 lg:mb-0">
            <img
              src="./principal_sir.jpg"
              alt="Principal"
              className="max-w-xs mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-3/5 text-left px-4">
            <h2 className="text-5xl text-teal-400 mb-4">Principal's Message</h2>
            <p className="text-lg leading-relaxed italic text-2xl mb-4">
              Dr Hari Vasudevan
            </p>
            <p className="text-lg leading-relaxed">
              In a short span of 30 years, Dwarkadas J. Sanghvi College of
              Engineering (DJSCE), an Autonomous Institution, affiliated to the
              University of Mumbai and owned by SVKM has come a long way and has
              made its impact felt not only in the country, but also abroad. Our
              students have been performing exceedingly well in national and
              globally competent multinational companies and also in the
              universities in India and abroad as they pursue their higher
              education.
            </p>
          </div>
        </div>
      </div>

      {/* Theme Section */}
      <div id="theme" className="section bg-black text-white py-12 px-6">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full lg:w-3/5 text-left px-4">
            <h2 className="text-5xl text-teal-400 mb-4">Theme</h2>
            <p className="text-lg leading-relaxed text-xl italic mb-4">
              Elements
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The theme revolving around the elements—Prithvi (Earth), Vayu
              (Air), Agni (Fire), Jal (Water), Samay (Time) and Vidyut
              (Electricity)—captures the essence of the natural forces that
              govern our world and existence. These elements symbolize the
              dynamic balance of life, each contributing uniquely to the cycle
              of creation, sustenance, and transformation. Together, they form
              an interconnected web that embodies both the physical and
              metaphysical realms, reflecting ancient wisdom and contemporary
              relevance.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              As the ancient Sanskrit saying goes, "पञ्चमहाभूतानि देहस्य धारिणः"
              (Pancha Mahabhutani Dehasya Dharinah)—the five great elements are
              the bearers of the body, underscoring the profound connection
              between these elemental forces and our very being.
            </p>
          </div>
          <div className="w-full lg:w-2/5 text-center px-4">
            <img
              src="./theme.png"
              alt="Theme"
              className="max-w-xs mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
