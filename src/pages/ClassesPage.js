import React, { useState } from "react";

const ClassesWithStudents = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "3e A",
      students: ["Yassine", "Amal", "Karim"]
    },
    {
      id: 2,
      name: "3e B",
      students: ["Sara", "Nabil", "Omar"]
    },
    {
      id: 3,
      name: "Terminale C",
      students: ["Lina", "Mohamed", "Hajar"]
    }
  ]);

  const [expandedClassId, setExpandedClassId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedClassId(expandedClassId === id ? null : id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">🏫 Liste des classes</h2>

      {classes.map((cls) => (
        <div key={cls.id} className="bg-gray-100 rounded shadow p-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">{cls.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => toggleExpand(cls.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                {expandedClassId === cls.id ? "➖ Hide Students" : "👥 Show Students"}
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                ➕ Add Student
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm">
                ✏️ Edit Class
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                🗑 Remove Class
              </button>
            </div>
          </div>

          {expandedClassId === cls.id && (
            <ul className="mt-3 ml-4 list-disc list-inside text-sm space-y-1">
              {cls.students.map((student, index) => (
                <li key={index}>{student}</li>
              ))}
              {cls.students.length === 0 && <li className="italic text-gray-500">No students added yet.</li>}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ClassesWithStudents;
