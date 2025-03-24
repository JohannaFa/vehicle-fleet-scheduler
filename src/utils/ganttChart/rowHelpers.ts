import { mockVehicles } from '../../mocks/vehicles'
import { mockBookings } from '../../mocks/bookings'
import { formatDatetoString } from '../formatters';
import { differenceInDays } from "date-fns";
import { BookingStatus, BookingType } from '../../types/booking';

export const getVehiclesWithBookings = () => {
    return mockVehicles.map(vehicle => ({
        id: vehicle.id,
        vehicle: {
            brand: vehicle.brand,
            model: vehicle.model,
            licensePlate: vehicle.licensePlate,
        },
        ...mockBookings.reduce<Record<string, { 
            type: BookingType;
            status: BookingStatus;
            colspan: number;
            updatedAt: Date;
        }>>((acc, booking) => {
            if (booking.vehicleId === vehicle.id) {
                const bookingColspans = calculateBookingLengthInDays(booking.startDate, booking.endDate) + 1;                
                const columnKeyDate = formatDatetoString(booking.startDate);

                acc[columnKeyDate] = {
                    type: booking.bookingType as BookingType,
                    status: booking.status as BookingStatus,
                    colspan: bookingColspans,
                    updatedAt: booking.updatedAt,
                };
            }
            return acc;
        }, {}),
    }));
};

function calculateBookingLengthInDays(startDate: Date, endDate: Date){
    return differenceInDays(endDate, startDate);
}