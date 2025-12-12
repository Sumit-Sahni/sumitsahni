import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] text-[#6e6e73] text-xs px-8 py-10 w-full">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top: Divider Line */}
        <div className="border-t border-gray-300" />

        
        {/* Bottom: Legal */}
        <div className="text-[10px] text-center text-gray-500 mt-10">
          <p>2021 - 2025 personal porfolio</p>
          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            <Link href="#" className="hover:underline">
              Developed by Sumit Sahni -- Pune
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
