// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

const BASE_URL = 'http://localhost:8888/mock-api';

export const handlers = [
  // 💳 Handler for a payment notice
  http.get(`${BASE_URL}/api/paymentNotice`, () => {
    return HttpResponse.json({
      invoiceNumber: 'INV-2025-07-001',
      invoiceDate: '2025-07-06',
      dueDate: '2025-07-15',
      recipient: 'Yasmine El Idrissi',
      class: '5ème année',
      items: [
        { label: 'Tuition - July', amount: 1000 },
        { label: 'Books & Materials', amount: 300 },
        { label: 'Transport', amount: 200 },
      ],
      total: 1500,
      currency: 'MAD',
    });
  }),

  // 📄 Handler for payment history
  http.get(`${BASE_URL}/api/payments`, () => {
    return HttpResponse.json([
      {
        date: '2025-07-01',
        studentName: 'Amira B.',
        amount: '1500',
        currency: 'MAD',
        method: 'Espèces',
      },
      {
        date: '2025-06-15',
        studentName: 'Omar L.',
        amount: '1200',
        currency: 'MAD',
        method: 'Carte bancaire',
      },
    ]);
  }),

  // 👩‍🏫 Handler for professor presence
  http.get(`${BASE_URL}/api/presence/professors`, () => {
    return HttpResponse.json([
      {
        name: 'Mme El Idrissi',
        scheduledTime: '08:00',
        checkInTime: '08:01',
        status: 'Present',
      },
      {
        name: 'M. Bensalah',
        scheduledTime: '09:00',
        checkInTime: null,
        status: 'Absent',
      },
    ]);
  }),

  // 🧪 Handler for upcoming exams
  http.get(`${BASE_URL}/api/exams`, () => {
    return HttpResponse.json([
      {
        subject: 'Mathématiques',
        className: '3e A',
        date: '2025-07-22',
        startTime: '09:00',
        endTime: '11:00',
        room: 'Salle 101',
      },
      {
        subject: 'Physique',
        className: '3e A',
        date: '2025-07-23',
        startTime: '13:00',
        endTime: '15:00',
        room: 'Salle 202',
      },
      {
        subject: "l'arabe",
        className: '3e B',
        date: '2025-07-24',
        startTime: '08:30',
        endTime: '10:30',
        room: 'Salle 103',
      },
    ]);
  }),

    // 🔐 Handler for login authentication with roles
    http.post(`${BASE_URL}/api/auth/login`, async ({ request }) => {
      const { username, password } = await request.json();

      if (username === 'admin' && password === 'adminpass') {
        return HttpResponse.json({
          token: 'mock-admin-token',
          user: {
            id: 1,
            username: 'admin',
            roles: ['admin', 'manager']
          }
        });
      }

      if (username === 'user' && password === 'userpass') {
        return HttpResponse.json({
          token: 'mock-user-token',
          user: {
            id: 2,
            username: 'user',
            roles: ['user']
          }
        });
      }

      return new HttpResponse(null, { status: 401 });
    }),


];
