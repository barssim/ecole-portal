import React, { useState } from "react";

const AttestationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const attestations = [
    { id: 1, title: "Attestation de scolarité", date: "2024-09-01" },
    { id: 2, title: "Attestation de présence", date: "2025-01-15" },
    { id: 3, title: "Attestation d’inscription", date: "2025-03-22" }
  ];

  const filtered = attestations.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">📄 Attestations sur demande</h2>

      <input
        type="text"
        placeholder="🔍 Rechercher une attestation..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded shadow-sm"
      />

      <ul className="space-y-4">
        {filtered.map((attestation) => (
          <li key={attestation.id} className="bg-gray-100 p-4 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{attestation.title}</p>
              <p className="text-sm text-gray-500">🗓 {attestation.date}</p>
            </div>
            <div className="space-x-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                👁 Voir
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">
                ⬇ Télécharger
              </button>
            </div>
          </li>
        ))}

        {filtered.length === 0 && (
          <li className="italic text-gray-500">Aucune attestation trouvée.</li>
        )}
      </ul>
    </div>
  );
};

export default AttestationsPage;
