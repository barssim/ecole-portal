import React, { useState } from "react";
import { Link } from "react-router-dom";


const StudentBlock = ({ isAuthorized, content }) => {
const [showActivites, setShowActivites] = useState(false);
  return (
     <div>
            <button
                         onClick={() => setShowActivites(!showActivites)}
                        disabled={!isAuthorized}
                        className={`text-2xl px-4 py-2 rounded-md font-semibold ${
                          isAuthorized
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-gray-400 text-gray-200 cursor-not-allowed"
                        }`}
                      >
                        {content.students}
                      </button>
                    {showActivites && (
            <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
              <li>
                <Link
                  to="/students/grades"
                  className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-200 inline-block"
                >
                  {content.grades || "Grades"}
                </Link>
              </li>
              <li>
                <Link
                  to="/students/schedule"
                  className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-200 inline-block"
                >
                  {content.schedule || "Schedule"}
                </Link>
              </li>
            </ul>
            )}
          </div>
  );
};

export default StudentBlock;

