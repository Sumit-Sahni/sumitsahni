import DateTimeBox from "@/components/date/Date";
import Footer from "@/components/footer/Footer";
import Left from "@/components/left/Left";
import Right from "@/components/right/Right";

export default function Home() {
  return (
    <>
      <div className=" text-[#6e6e73] text-xs px-4 py-2 w-full flex  justify-between items-center lg:fixed z-50">
        <div>
          <h1 className="text-xs  md:text-lg">portfolio</h1>
        </div>
        <DateTimeBox />
      </div>
      <div className="font-sans min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 flex flex-col lg:flex-row">
        {/* Left Section - Fixed */}
        <div className="lg:w-1/5 lg:fixed lg:h-screen lg:overflow-hidden flex flex-col items-start">
          <Left />
        </div>

        {/* Right Section - Scrollable with left margin to account for fixed left */}
        <div className="lg:w-full lg:ml-[20%] flex flex-col items-end">
          <Right />
        </div>
      </div>
      <Footer />
    </>
  );
}
