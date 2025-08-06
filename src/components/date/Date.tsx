"use client";
import React, { useEffect, useState } from "react";

const DateTimeBox = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format date as DD/MM/YYYY (Indian format)
  const formattedDate = time.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Format time in 12-hour format with AM/PM (Indian format)
  const formattedTime = time.toLocaleDateString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="text-xs bg-gray-100 text-gray-800 rounded-lg p-2 w-fit font-mono">
      {/* Make sure you're using formattedDate and formattedTime here */}
      <div>
        <strong>D/T:</strong> {formattedTime}
      </div>
    </div>
  );
};

export default DateTimeBox;
