export interface Customers{
    id: number;
    name: string;
}
export interface Consumptions{
    id: number;
    customer: number;
    service: Array<number>;
}
export interface Hotel {
    id: number;
    name: string;
    description: string;
    address: string;
}
export interface Room {
    id: number;
    hotelId: number;
    roomTypeId: number;
    roomNumber: number;
    floor: number;
}

