"use client";

import GoogleAuthButton from "@/components/auth/FirebaseLogin";
import DateTimeBox from "@/components/date/Date";
import Footer from "@/components/footer/Footer";
import Left from "@/components/left/Left";
import Right from "@/components/right/Right";
import ScrollProgressBar from "@/components/scrollbar/ScrollProgressBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-fill sm:bg-cover bg-center bg-no-repeat to-white/5 from-white/20 via-white/10 bg-gradient-to-b">
      {/* Header */}
      <div
        className="top-0 left-0 right-0 w-full px-4 py-4
                      flex justify-between items-center
                      text-black text-xs"
      >
        {/* Left */}
        <h1 className="text-xs p-1 px-2 rounded-sm md:text-md font-bold text-black">
          portfolio
        </h1>

        {/* Right */}
        <div className="flex flex-row justify-between items-center gap-1">
          {/* 🔒 Hidden on mobile */}
          <div className="hidden md:block mr-4">
            <GoogleAuthButton />
          </div>
          <DateTimeBox />
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Main Content */}
      <div
        className="font-sans min-h-screen 
                      px-4 md:p-4 lg:px-4 xl:px-16 2xl:px-48
                      flex flex-col lg:flex-row bg-white"
      >
        <div className=" mx-auto w-full sm:w-1/3 xl:w-1/3  ">
          <Left />
        </div>
        <div className="lg:w-full flex flex-col items-end md:px-4">
          <Right />
        </div>
      </div>

      <Footer />
    </div>
  );
}
