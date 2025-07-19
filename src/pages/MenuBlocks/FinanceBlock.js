import React, { useState } from "react";
import { Link } from "react-router-dom";


const FinanceBlock = ({ isAuthorized, content }) => {
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
                        {content.finance}
                      </button>
                    {showActivites && (
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
             )}
          </div>
  );
};

export default FinanceBlock;

