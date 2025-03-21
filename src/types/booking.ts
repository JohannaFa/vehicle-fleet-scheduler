export interface Booking {
    id: string;
    vehicleId: string;
    startDate: Date;
    endDate: Date;
    status: BookingStatus;
    createdAt: Date;
    updatedAt: Date;
  }

type BookingStatus = 'pending' | 'active' | 'completed' | 'cancelled';