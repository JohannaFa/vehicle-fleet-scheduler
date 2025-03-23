import { mockVehicles } from '../../mocks/vehicles'
import { mockBookings } from '../../mocks/bookings'
import { formatDatetoString } from '../formatters';
import { differenceInDays } from "date-fns";
import { Booking } from '../../types/booking';

export const getVehiclesWithBookings = () => {
    return mockVehicles.map(vehicle => ({
        id: vehicle.id,
        vehicle: `${vehicle.brand} ${vehicle.model} (${vehicle.licensePlate})`,
        ...mockBookings.reduce((acc, booking: Booking) => {
            if (booking.vehicleId === vehicle.id) {
                const bookingColspans = calculateBookingLengthInDays(booking.startDate, booking.endDate)+1;                
                const columnKeyDate = formatDatetoString(booking.startDate)
                acc[columnKeyDate] = {
                  type: booking.bookingType,
                  status: booking.status,
                  colspan: bookingColspans,
                  updatedAt: booking.updatedAt,
                }
            }
            return acc;
        }, {}),
    }));
};

function calculateBookingLengthInDays(startDate: Date, endDate: Date){
    return differenceInDays(endDate, startDate);
}