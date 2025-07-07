import React from "react";

interface FeeItem {
  description: string;
  amount: number;
}

interface SchoolInvoiceProps {
  schoolName: string;
  studentName: string;
  studentClass: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate?: string;
  fees: FeeItem[];
}

const SchoolInvoicePreview: React.FC<SchoolInvoiceProps> = ({
  schoolName,
  studentName,
  studentClass,
  invoiceNumber,
  invoiceDate,
  dueDate,
  fees,
}) => {
  const totalAmount = fees.reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-lg border">
      <h2 className="text-2xl font-bold text-center mb-4">{schoolName}</h2>

      <div className="mb-4">
        <p><strong>Numéro de facture: </strong>{invoiceNumber}</p>
        <p><strong>Date de facturation : </strong>{invoiceDate}</p>
        {dueDate && <p><strong>Date d’échéance: </strong>{dueDate}</p>}
        <p><strong>Destinataire: </strong>{studentName}</p>
        <p><strong>Class: </strong>{studentClass}</p>
      </div>

      <table className="w-full border border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Détails des frais</th>
            <th /><th /><th />
            <th className="border px-4 py-2 text-right">Montant (MAD)</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{fee.description}</td>
              <th /><th /><th />
              <td className="border px-4 py-2 text-right">{fee.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right text-lg font-semibold">
        Total: {totalAmount.toFixed(2)} MAD
      </div>

      <p className="text-sm mt-4 text-gray-600 text-center">
        Veuillez effectuer le paiement avant la date d’échéance. Merci !
      </p>
    </div>
  );
};

export default SchoolInvoicePreview;
