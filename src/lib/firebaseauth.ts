// File: src/lib/FireBaseAuth.ts
import { useEffect, useState, useCallback } from "react";
import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
  Unsubscribe,
} from "firebase/auth";

// Global timeout reference
let timeoutRef: NodeJS.Timeout | null = null;

// Activity tracker setup
const setupActivityListeners = (resetTimer: () => void): (() => void) => {
  const events = ["mousemove", "keydown", "click", "scroll"];

  events.forEach((event) => {
    window.addEventListener(event, resetTimer);
  });

  return () => {
    events.forEach((event) => {
      window.removeEventListener(event, resetTimer);
    });
  };
};

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const clearAutoLogout = useCallback(() => {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
      timeoutRef = null;
    }
  }, []);

  const setupAutoLogout = useCallback(
    (logoutFn: () => void) => {
      clearAutoLogout();
      timeoutRef = setTimeout(logoutFn, 30 * 60 * 1000); // 5 minutes

      // Throttle activity handler
      let lastCall = 0;
      const throttleTime = 5000; // 5 seconds

      const resetTimer = () => {
        const now = Date.now();
        if (now - lastCall >= throttleTime) {
          lastCall = now;
          clearAutoLogout();
          timeoutRef = setTimeout(logoutFn, 30 * 60 * 1000);
        }
      };

      return setupActivityListeners(resetTimer);
    },
    [clearAutoLogout]
  );

  const signInWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      return null;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      setUser(null);
      clearAutoLogout();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  }, [clearAutoLogout]);

  useEffect(() => {
    const handleAuthStateChanged = async (user: User | null) => {
      setUser(user);
      setLoading(false);
    };

    const unsubscribe: Unsubscribe = onAuthStateChanged(
      auth,
      handleAuthStateChanged
    );

    return () => {
      unsubscribe();
      clearAutoLogout();
      // Note: if you moved cleanupActivityListeners inside handleAuthStateChanged,
      // you might need to store it in a ref to access here
    };
  }, [logout, setupAutoLogout, clearAutoLogout]);

  return {
    user,
    loading,
    signInWithGoogle,
    logout,
  };
};

export const getUserFromFirebase = (): User | null => {
  return auth.currentUser;
};
