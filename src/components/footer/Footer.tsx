import Link from "next/link";
import GoogleAuthButton from "../auth/FirebaseLogin";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] text-[#6e6e73] text-xs px-8 py-10 w-full">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Content */}
        <div
          className="
            mt-10 text-[10px] text-gray-500
            flex flex-col items-center gap-4
            lg:grid lg:grid-cols-1 lg:items-center
          "
        >
          {/* LEFT: Auth */}
          <div className="md:hidden block py-2">
            <GoogleAuthButton />
          </div>

          {/* CENTER: Legal */}
          <div className="text-center">
            <p>2021 – 2026 personal portfolio</p>
            <div className="flex justify-center flex-wrap">
              <Link href="#" className="hover:underline">
                Developed by Sumit Sahni — Pune
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
