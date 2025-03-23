export interface Vehicle {
    id: string;
    licensePlate: string;
    type: string;
    brand: string;
    model: string;
    year: number;
    capacity: number;
    location: string;
    status: VehicleStatus;
}

type VehicleStatus = 'available' | 'unavailable' | 'maintenance';