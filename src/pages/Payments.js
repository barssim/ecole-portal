import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { REST_API_GATEWAY_URL } from "../globals.js";
import fr from "../locales/fr.json";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

const Payments =  ({language}) => {
  let content = language === "fr" ? fr : language === "en" ? en : ar;
  const [payments, setPayments] = useState([]);

  useEffect(() => {
   axios.get(REST_API_GATEWAY_URL + "api/payments")
      .then(response => setPayments(response.data))
      .catch(error => console.error("Error fetching payments:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Liste des paiements</h2>
      <table className="w-full border-collapse text-sm rtl:text-right ltr:text-left">
        <thead className="bg-blue-200">
          <tr>
            <th className="p-2 border">{content.date}</th>
            <th className="p-2 border">{content.student}</th>
            <th className="p-2 border">{content.amount}</th>
            <th className="p-2 border">{content.method}</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, i) => (
            <tr key={i} className="even:bg-gray-50">
              <td className="p-2 border">{payment.date}</td>
              <td className="p-2 border">{payment.studentName}</td>
              <td className="p-2 border">{payment.amount} {payment.currency}</td>
              <td className="p-2 border">{payment.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
