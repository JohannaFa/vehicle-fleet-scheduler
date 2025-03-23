export interface Booking {
    id: string;
    vehicleId: string;
    bookingType: string,
    startDate: Date;
    endDate: Date;
    status: BookingStatus;
    createdAt: Date;
    updatedAt: Date;
  }

export type BookingStatus = 'pending' | 'active' | 'completed' | 'cancelled';