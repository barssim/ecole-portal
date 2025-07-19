import React, { useState } from "react";
import { Link } from "react-router-dom";


const AdminBlock = ({ isAuthorized, content }) => {
  const [showActivites, setShowActivites] = useState(false);

  return (
    <div
      className={`space-y-4 p-6 rounded ${
        isAuthorized
          ? "bg-white text-gray-900"
          : "bg-gray-300 text-gray-500 opacity-60 cursor-not-allowed"
      }`}
      style={{ pointerEvents: isAuthorized ? "auto" : "none" }}
    >
       <button
             onClick={() => setShowActivites(!showActivites)}
            disabled={!isAuthorized}
            className={`text-2xl px-4 py-2 rounded-md font-semibold ${
              isAuthorized
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            {content.administration}
          </button>
        {showActivites && (
      <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
        <li>
          <Link
            to="/administration/inscription"
            className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200 inline-block"
          >
            {content.inscription}
          </Link>
        </li>
        <li>
          <Link
            to="/administration/classes"
            className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200 inline-block"
          >
            {content.classes}
          </Link>
        </li>
        <li>
          <Link
            to="/administration/attestations"
            className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200 inline-block"
          >
            {content.attestations}
          </Link>
        </li>
        <li>
          <Link
            to="/administration/examens"
            className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200 inline-block"
          >
            {content.examens}
          </Link>
        </li>
        <li>
          <Link
            to="/administration/presence"
            className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200 inline-block"
          >
            {content.presence}
          </Link>
        </li>
        <li>
          <button
            onClick={() => setShowActivites(!showActivites)}
            className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200 inline-block w-full text-left"
          >
            {content.activités || "Activités"}
          </button>
          {showActivites && (
            <ul className="ml-4 mt-1 list-[circle] space-y-1">
              <li>
                <Link
                  to="/administration/activites/sorties"
                  className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 inline-block"
                >
                  {content.sorties || "Sorties"}
                </Link>
              </li>
              <li>
                <Link
                  to="/administration/activites/fetes"
                  className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 inline-block"
                >
                  {content.fetes || "Fêtes"}
                </Link>
              </li>
              <li>
                <Link
                  to="/administration/activites/reunions"
                  className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 inline-block"
                >
                  {content.reunions || "Réunions"}
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      )};
    </div>
  );
};

export default AdminBlock;

