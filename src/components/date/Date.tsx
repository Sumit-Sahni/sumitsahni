"use client";

import React, { useEffect, useState } from "react";

const DateTimeBox = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setTime(new Date());

    // Set initial time on client only
    update();

    // Then update every second
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) return null; // Or a placeholder like "Loading..."

  const formattedDate = time.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="text-xs bg-gray-100 text-gray-800 rounded-lg p-2 w-fit font-mono">
      <div>
        <strong>D/T:</strong> {formattedDate} {formattedTime}
      </div>
    </div>
  );
};

export default DateTimeBox;
