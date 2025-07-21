import React, { useState } from "react";
import { Link } from "react-router-dom";


const StudentBlock = ({ isAuthorized, content }) => {
const [showActivites, setShowActivites] = useState(false);
  return (
     <div className="bg-white p-4 shadow-md rounded-md">
            <button
                         onClick={() => setShowActivites(!showActivites)}
                        disabled={!isAuthorized}
                       className={`menu-item ${isAuthorized ? "menu-item-active" : "menu-item-inactive"}`}
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
                  className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200 inline-block"
                >
                  {content.schedule || "Schedule"}
                </Link>
              </li>
            </ul>
            )}
          </div>
  );
}

export default StudentBlock;

