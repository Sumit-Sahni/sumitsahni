"use client";

import GoogleAuthButton from "@/components/auth/FirebaseLogin";
import DateTimeBox from "@/components/date/Date";
import Footer from "@/components/footer/Footer";
import Left from "@/components/left/Left";
import Right from "@/components/right/Right";
import ScrollProgressBar from "@/components/scrollbar/ScrollProgressBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-fill sm:bg-cover bg-center bg-no-repeat">
      {/* Header */}
      <div className="top-0 left-0 right-0 w-full px-4 py-4
                      flex justify-between items-center
                      text-black text-xs">

        {/* Left */}
        <h1 className="text-xs p-1 px-2 rounded-sm md:text-md font-bold bg-white text-black">
          portfolio
        </h1>

        {/* Right */}
        <div className="flex flex-col items-start gap-1">
          <DateTimeBox />

          {/* 🔒 Hidden on mobile */}
          <div className="hidden md:block mt-1">
            <GoogleAuthButton />
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Main Content */}
      <div className="font-sans min-h-screen 
                      px-6 md:p-4 lg:px-4 xl:px-16 2xl:px-48
                      flex flex-col lg:flex-row bg-white">
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
