import DateTimeBox from "@/components/date/Date";
import Footer from "@/components/footer/Footer";
import Left from "@/components/left/Left";
import Right from "@/components/right/Right";
import ScrollProgressBar from "@/components/scrollbar/ScrollProgressBar";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-fill sm:bg-cover bg-center bg-no-repeat"
    >
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Header */}
      <div className="sm:text-gray-500 text-xs px-4 py-2 w-full flex justify-between items-center lg:fixed z-50">
        <div>
          <h1 className="text-lg md:text-lg">portfolio</h1>
        </div>
        <DateTimeBox />
      </div>

      {/* Main Content */}
      <div className="font-sans min-h-screen p-2 sm:p-8 md:p-12 lg:p-24 flex flex-col lg:flex-row">
        {/* Left Section - Fixed */}
        <div className="lg:w-1/5 lg:fixed lg:h-screen lg:overflow-hidden flex flex-col items-start">
          <Left />
        </div>

        {/* Right Section - Scrollable */}
        <div className="lg:w-full lg:ml-[20%] flex flex-col items-end">
          <Right />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
