import React, { useState } from "react";
import { Link } from "react-router-dom";


const ServicesBlock = ({ isAuthorized, content }) => {
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
                        {content.services}
                      </button>
                    {showActivites && (
            <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
              <li>
                <Link
                  to="/services/bibliotheque"
                  className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded hover:bg-purple-200 inline-block"
                >
                  {content.bibliotheque || "Bibliothèque"}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cantine"
                  className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded hover:bg-purple-200 inline-block"
                >
                  {content.cantine || "Cantine"}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/transport"
                  className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded hover:bg-purple-200 inline-block"
                >
                  {content.transport || "Transport"}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/sport"
                  className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded hover:bg-purple-200 inline-block"
                >
                  {content.sport || "Sport"}
                </Link>
              </li>
            </ul>
            )}
          </div>
  );
};

export default ServicesBlock;

