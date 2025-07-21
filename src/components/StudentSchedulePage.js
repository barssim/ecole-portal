import React, { useEffect, useState } from "react";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

const StudentSchedulePage = ({ language }) => {
  const content = language === "fr" ? fr : language === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
  const schedule = [
    { day: "Monday", slots: ["Math - 08:00", "Physics - 10:00", "English - 13:00"] },
    { day: "Tuesday", slots: ["Biology - 09:00", "History - 11:00", "Sport - 15:00"] },
    { day: "Wednesday", slots: ["Chemistry - 08:30", "Arabic - 10:30", "Arts - 14:00"] },
    { day: "Thursday", slots: ["Geography - 09:00", "Ethics - 11:30", "Coding - 16:00"] },
    { day: "Friday", slots: ["French - 08:00", "Economics - 10:30", "Club Hour - 13:30"] }
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {schedule.map((dayPlan, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">{dayPlan.day}</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {dayPlan.slots.map((slot, i) => (
                <li key={i}>{slot}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  );
};

export default StudentSchedulePage;
