import React, { useState } from "react";
import { Link } from "react-router-dom";


const ParentBlock = ({ isAuthorized, content }) => {
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
                        {content.parents}
                      </button>
                    {showActivites && (
            <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
              <li>
                          <Link
                            to="/parents/presence"
                            className="text-xs bg-pink-100 text-pink-800 px-3 py-1 rounded hover:bg-pink-200 inline-block"
                          >
                            {content.presence || "Presence"}
                          </Link>
                        </li>
               <li>
                          <Link
                            to="/parents/payments"
                            className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200 inline-block"
                          >
                            {content.payments || "Payments"}
                          </Link>
                        </li>
               <li>
                           <Link
                             to="/parents/schedule"
                             className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-200 inline-block"
                           >
                             {content.schedule || "Schedule"}
                           </Link>
                         </li>
                <li>
                           <Link
                             to="/parents/grades"
                             className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-200 inline-block"
                           >
                             {content.grades || "Grades"}
                           </Link>
                         </li>
                <li>
                                       <Link
                                         to="/parents/student_progress"
                                         className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-200 inline-block"
                                       >
                                         {content.student_progress || "Progression de l'élève"}
                                       </Link>
                                     </li>
                 <li>
                                                   <Link
                                                     to="/parents/contact_teacher"
                                                     className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-200 inline-block"
                                                   >
                                                     {content.contact_teacher || "Contacter l'enseignant"}
                                                   </Link>
                                                 </li>
              <li>
                <Link
                  to="/parents/reports"
                  className="text-xs bg-pink-100 text-pink-800 px-3 py-1 rounded hover:bg-pink-200 inline-block"
                >
                  {content.reports || "Reports"}
                </Link>
              </li>
              <li>
                <Link
                  to="/parents/messages"
                  className="text-xs bg-pink-100 text-pink-800 px-3 py-1 rounded hover:bg-pink-200 inline-block"
                >
                  {content.messages || "Messages"}
                </Link>
              </li>
            </ul>
            )}
          </div>
  );
};

export default ParentBlock;

