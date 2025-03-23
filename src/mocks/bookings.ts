import { Booking } from "../types/booking";

export const mockBookings: Booking[] = [
  {
    id: '1',
    vehicleId: '1',
    bookingType: 'Wartung',
    startDate: new Date('2025-03-22'),
    endDate: new Date('2025-03-24'),
    status: 'active',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date(),
  },
  {
    id: '2',
    vehicleId: '2',
    bookingType: 'Kundenbuchung',
    startDate: new Date('2025-03-17'),
    endDate: new Date('2025-03-20'),
    status: 'pending',
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date(),
  },
  {
    id: '3',
    vehicleId: '2',
    bookingType: 'Bereitstellung',
    startDate: new Date('2025-03-11'),
    endDate: new Date('2025-03-12'),
    status: 'completed',
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date(),
  },
];
