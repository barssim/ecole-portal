import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import fr from "../locales/fr.json";
import ar from "../locales/ar.json";
import en from "../locales/en.json";


const Home = ({ language }) => {
  const [showActivites, setShowActivites] = useState(true); // default open

  let content = language === "fr" ? fr : language === "en" ? en : ar;

  return (
    <div className="menu space-y-4 p-6 bg-gray-50 min-h-screen" >
      {/* Administration */}
      <div>
        <Link
          to="/administration"
          className="block text-2xl bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold"

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

      {/* Enseignement */}
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
              to="/enseignement/professeurs"
              className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded hover:bg-indigo-200 inline-block"
            >
              {content.professeurs || "Professeurs"}
            </Link>
          </li>
          <li>
            <Link
              to="/enseignement/classes"
              className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded hover:bg-indigo-200 inline-block"
            >
              {content.classes || "Classes"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Services */}
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

      {/* Finance */}
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
