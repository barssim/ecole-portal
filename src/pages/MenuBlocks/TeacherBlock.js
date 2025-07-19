import React, { useState } from "react";
import { Link } from "react-router-dom";


const TeacherBlock = ({ isAuthorized, content }) => {
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
                        {content.enseignement}
                      </button>
                    {showActivites && (
           <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">

             <li>
                 <Link
                   to="/enseignement/cours"
                   className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-100 inline-block"
                 >
                   {content.courses}
                 </Link>
               </li>
               <li>
                 <Link
                   to="/enseignement/devoirs"
                   className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-100 inline-block"
                 >
                   {content.assignments}
                 </Link>
               </li>
               <li>
                 <Link
                   to="/enseignement/notes"
                   className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-100 inline-block"
                 >
                   {content.grades}
                 </Link>
               </li>
               <li>
                 <Link
                   to="/enseignement/shared-documents"
                   className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-100 inline-block"
                 >
                   {content.shared_documents}
                 </Link>
               </li>
             <li>
               <Link
                 to="/enseignement/parent-meetings"
                 className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-100 inline-block"
               >
                 {content.parent_meetings}
               </Link>
             </li>

           </ul>
           )}
         </div>
  );
};

export default TeacherBlock;

