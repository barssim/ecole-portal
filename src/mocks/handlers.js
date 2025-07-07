// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import { REST_API_GATEWAY_URL } from "../globals.js";

export const handlers = [
  // Handler for payment notice
  http.get(`${REST_API_GATEWAY_URL}api/paymentNotice`, () => {
    return HttpResponse.json({
      invoiceNumber: 'INV-2025-07-001',
      invoiceDate: '2025-07-06',
      dueDate: '2025-07-15',
      recipient: 'Yasmine El Idrissi',
      class: '5ème année',
      items: [
        { label: 'Tuition - July', amount: 1000 },
        { label: 'Books & Materials', amount: 300 },
        { label: 'Transport', amount: 200 }
      ],
      total: 1500,
      currency: 'MAD'
    });
  }),

  // Handler for payment history
  http.get(`${REST_API_GATEWAY_URL}api/payments`, () => {
    return HttpResponse.json([
      {
        date: '2025-07-01',
        studentName: 'Amira B.',
        amount: '1500',
        currency: 'MAD',
        method: 'Espèces'
      },
      {
        date: '2025-06-15',
        studentName: 'Omar L.',
        amount: '1200',
        currency: 'MAD',
        method: 'Carte bancaire'
      }
    ]);
  })
];
