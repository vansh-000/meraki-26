import React, { useState } from "react";
import minecraftimg from "../assets/MinecraftDungeons_S2AdventurePass_1280x768.png";
import chatgptbg from "../assets/ChatGPT Image Nov 29, 2025, 12_38_45 AM.png";

const events = [
  {
    id: 1,
    title: "DRONE EVENT",
    image: minecraftimg,
    description: "Capture the Tower by night, and in a whole new light, with these times.",
  },
  {
    id: 2,
    title: "DRONE EVENT",
    image: minecraftimg,
    description: "Capture the Tower by night, and in a whole new light, with these times.",
  },
  {
    id: 3,
    title: "DRONE EVENT",
    image: minecraftimg,
    description: "Capture the Tower by night, and in a whole new light, with these times.",
  },
  {
    id: 4,
    title: "DRONE EVENT",
    image: minecraftimg,
    description: "Capture the Tower by night, and in a whole new light, with these times.",
  },
];

function Elite() {
  const [activeTab, setActiveTab] = useState(events[0].id);

  const activeEvent = events.find((event) => event.id === activeTab);

  return (<>
     <div className="relative w-full min-h-screen text-white m-t-[5px] pt-0 px-8 pb-8 overflow-hidden flex flex-col">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={chatgptbg} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Header */}
      <div className="relative z-10 y-0 w-full max-w-6xl mb-8 flex justify-start">
        <h2 className="text-xl md:text-2xl font-minecraft text-white flex items-center gap-2">
          <span className="text-accent-400 text-xl">▶</span> ELITE EVENTS
        </h2>
      </div>

      {/* Content Container */}
        <div className="flex-1 flex justify-center items-center w-full">
       <div className="relative z-10 flex flex-col-reverse md:flex-row w-full max-w-6xl gap-0 md:gap-0 overflow-visible">

        {/* Left Column: Tabs */}
        <div className="w-full md:w-1/3 flex flex-col overflow-visible z-10">
          {events.map((event) => (
<button
  key={event.id}
  onClick={() => setActiveTab(event.id)}
  className={`
    group flex items-center gap-4 p-4 md:pr-6 text-left transition-all duration-300 
    ${
      activeTab === event.id
        ? `bg-[rgba(71,71,71,1)] md:pr-12 md:mr-[-16px] md:translate-x-[-6px]
           ${event.id === 1 
              ? "border-l-[5px] border-t-[5px] border-[rgba(48,48,48,1)]"
              : event.id === 4
              ? "border-l-[5px] border-b-[5px] border-[rgba(48,48,48,1)] "
              : "border-l-[5px] border-[rgba(48,48,48,1)]"
           }`
        : "bg-[rgba(48,48,48,1)]"
    }
  `}
>

              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded flex items-center justify-center shrink-0 overflow-hidden">
                 <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-80" />
              </div>
              <span className={`font-minecraft text-sm md:text-base ${activeTab === event.id ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                {event.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right Column: Details */}
<div className="relative z-20 md:translate-x-[-4px] w-full bg-[rgba(71,71,71,1)] md:w-2/3 backdrop-blur-sm
p-6 md:p-8 border-b-[8px] border-t-[5px] border-r-[5px] border-[rgba(48,48,48,1)]
flex flex-col gap-6 items-center
h-auto md:h-[650px] lg:h-[750px] xl:h-[620px]">

            {/* Event Image */}
            <div className="w-full h-full relative group rounded-lg aspect-video">
                <img 
                    src={activeEvent.image} 
                    alt={activeEvent.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Event Info */}
            <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between h-full">
                <div className="lg:w-2/3">
                    <p className="font-minecraft text-gray-300 text-xsm leading-relaxed mb-6 lg:mb-0">
                        {activeEvent.description}
                    </p>
                </div>
                <button className="self-start md:absolute md:bottom-8 md:right-8 lg:static lg:self-center px-6 py-3 bg-gradient-to-r from-[#D79928] to-[#C57135] border-2 border-white text-black font-minecraft text-sm hover:brightness-110 transition-all shadow-lg shadow-orange-500/20 rounded-sm">
                    REGISTER NOW!
                </button>
            </div>
        </div>
      </div>
      </div>
    </div></>
  );
}

export default Elite;