"use client";

import GoogleAuthButton from "@/components/auth/FirebaseLogin";
import DateTimeBox from "@/components/date/Date";
import Footer from "@/components/footer/Footer";
import Left from "@/components/left/Left";
import Right from "@/components/right/Right";
import ScrollProgressBar from "@/components/scrollbar/ScrollProgressBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-fill sm:bg-cover bg-center bg-no-repeat to-white/5 from-white/20 via-white/10 bg-gradient-to-b flex flex-col">
      {/* Header */}
      <div
        className="sticky top-0 left-0 right-0 w-full px-4 py-4
                      flex justify-between items-center
                      text-black text-xs bg-white/80 backdrop-blur-sm z-10"
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
        className="font-sans flex-1
                      px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-24
                      flex flex-col lg:flex-row gap-4 lg:gap-6
                      bg-white w-full max-w-[1600px] mx-auto"
      >
        {/* Left Column - Fixed width on large screens, full width on mobile */}
        <div className="w-full lg:w-[280px] xl:w-[320px] 2xl:w-[380px] flex-shrink-0">
          <Left />
        </div>
        
        {/* Right Column - Takes remaining space */}
        <div className="flex-1 min-w-0">
          <Right />
        </div>
      </div>

      <Footer />
    </div>
  );
}