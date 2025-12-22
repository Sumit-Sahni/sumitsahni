"use client";

import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";

const GoogleAuthButton = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔑 Keep auth state in sync
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex flex-row items-center gap-3">
      {!user ? (
        // 🔐 Google Login Button
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="cursor-pointer flex items-center gap-2 h-8 px-3 rounded-full
             border border-gray-300 bg-white text-xs text-gray-700
             hover:bg-gray-50 transition disabled:opacity-50"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={14}
            height={14}
          />
          <span className="leading-none">Google</span>
        </button>
      ) : (
        // 👤 User Email + Sign Out
        <div className="">
          <span className="text-sm truncate max-w-[200px] px-2 text-blue-500">
           <span className=" text-black mr-2 ">Hello!</span> {user.email}
          </span>

          <button
            onClick={handleSignOut}
            className="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleAuthButton;
