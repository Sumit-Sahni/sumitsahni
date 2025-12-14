"use client";

import DateTimeBox from "@/components/date/Date";
import Footer from "@/components/footer/Footer";
import Left from "@/components/left/Left";
import Right from "@/components/right/Right";
import ScrollProgressBar from "@/components/scrollbar/ScrollProgressBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-fill sm:bg-cover bg-center bg-no-repeat">
      {/* Fixed Header - Always on top */}
      <div className=" absolute text-black text-xs px-4 py-2 w-full flex justify-between items-center  top-0 left-0 right-0  ">
        <div>
          <h1 className="text-xs p-1 px-2 rounded-sm md:text-md font-bold bg-white text-black">portfolio</h1>
        </div>
        <DateTimeBox />
      </div>

      {/* Top hero background */}
      {/* <div 
  className="w-full h-[20vh] bg-cover bg-center bg-no-repeat pt-[calc(10vh+2.5rem)] z-50 hero-bg  "
  style={{ backgroundImage: "url('https://www.commercialdesignindia.com/cloud/2024/09/16/Microsoft-And-Google-Race-To-Build-The-Worlds-Smartest-Cloud.jpg')" }}
/>  */}


      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Main Content */}
      <div className="font-sans min-h-screen pt-[10vh] p-2 sm:p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row bg-white">
        <div className="lg:w-1/3 flex flex-col items-start">
          <Left />
        </div>
        <div className="lg:w-full flex flex-col items-end px-4 md:px-12">
          <Right />
        </div>
      </div>

      <Footer />
    </div>
  );
}
