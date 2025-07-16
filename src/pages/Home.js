import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import fr from "../locales/fr.json";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

const Home = ({ language }) => {
  const [showActivites, setShowActivites] = useState(true);
  const content = language === "fr" ? fr : language === "en" ? en : ar;

  const allowedRoles = ["finance", "admin", "manager"];
  const userRoles = JSON.parse(localStorage.getItem("user_roles") || "[]");
  const isAuthorized = allowedRoles.some(role => userRoles.includes(role));

  return (
    <div className="menu space-y-4 p-6 bg-gray-50 min-h-screen">
      {/* Administration Block - Role Restricted */}
      <div
        className={`space-y-4 p-6 rounded ${
          isAuthorized
            ? "bg-white text-gray-900"
            : "bg-gray-300 text-gray-500 opacity-60 cursor-not-allowed"
        }`}
        style={{ pointerEvents: isAuthorized ? "auto" : "none" }}
      >
        <Link
          to={isAuthorized ? "/administration" : "#"}
          className={`block text-2xl px-4 py-2 rounded-md font-semibold ${
            isAuthorized
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          style={{ pointerEvents: isAuthorized ? "auto" : "none" }}
        >
          {content.administration}
        </Link>

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
      </div>

      {/* Enseignement Block */}
      <div>
        <Link
          to="/enseignement"
          className="block text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-semibold"
        >
          {content.enseignement}
        </Link>
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
      </div>
      {/* Students Section */}
      <div>
        <Link
          to="/students"
          className="block text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold"
        >
          {content.students || "Students"}
        </Link>
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
      </div>

      {/* Parents Section */}
      <div>
        <Link
          to="/parents"
          className="block text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md font-semibold"
        >
          {content.parents || "Parents"}
        </Link>
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
      </div>

      {/* Services Block */}
      <div>
        <Link
          to="/services"
          className="block text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md font-semibold"
        >
          {content.services}
        </Link>
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
          <li>
            <Link
              to="/services/menage"
              className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded hover:bg-purple-200 inline-block"
            >
              {content.menage || "Ménage"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Finance Block */}
      <div>
        <Link
          to="/finance"
          className="block text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-semibold"
        >
          {content.finance}
        </Link>
        <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
          <li>
            <Link
              to="/finance/payments"
              className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200 inline-block"
            >
              {content.payments || "Payments"}
            </Link>
          </li>
          <li>
            <Link
              to="/finance/factures"
              className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200 inline-block"
            >
              {content.factures || "Factures"}
            </Link>
          </li>
          <li>
            <Link
              to="/finance/paymentNotice"
              className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200 inline-block"
            >
              {content.Payment_Notice || "Payment Notice"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
