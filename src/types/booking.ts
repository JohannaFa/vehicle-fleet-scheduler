export interface Booking {
    id: string;
    vehicleId: string;
    bookingType: BookingType,
    startDate: Date;
    endDate: Date;
    status: BookingStatus;
    createdAt: Date;
    updatedAt: Date;
  }

export type BookingStatus = 'pending' | 'active' | 'completed';
export type BookingType = 'maintenance' | 'customer booking' | 'provisioning';

