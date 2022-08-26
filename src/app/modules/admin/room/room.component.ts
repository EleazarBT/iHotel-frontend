import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Hotel, Room} from '../components.model';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
    selector     : 'room',
    templateUrl  : './room.component.html',
    styleUrls  : ['./room.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class RoomComponent implements OnInit {
    newRoom: Room;
    selectHotel: Hotel;
    selectTypeRoom: any;
    selectRoom: Room;
    hotels: Array<Hotel> = [
        {
            id: 0,
            name: 'Hotel el Cielo',
            description: 'El primero del gran imperio',
            address: 'AV. Arequipa 7085, Cercado de Lima'
        },
        {
            id: 1,
            name: 'Hotel el Cielo 2',
            description: 'El segundo del gran imperio',
            address: 'AV. Arequipa 7085, Cercado de Lima'
        },
        {
            id: 2,
            name: 'Hotel el Cielo 3',
            description: 'El tercero del gran imperio',
            address: 'AV. Arequipa 7085, Cercado de Lima'
        }
    ];
    roomType: Array<any> = [
        {
            id: 0,
            name: 'Matrimonial',
            beds: [
                {
                    bedId: 3,
                    amount: 1,
                }
            ]
        },
        {
            id: 1,
            name: 'Familiar',
            beds: [
                {
                    bedId: 1,
                    amount: 1,
                },
                {
                    bedId: 0,
                    amount: 2,
                }
            ]
        },
        {
            id: 2,
            name: 'MultiFamiliar',
            beds: [
                {
                    bedId: 1,
                    amount: 1,
                },
                {
                    bedId: 0,
                    amount: 4,
                }
            ]
        }
    ];
    rooms: Array<Room> = [
        {
            id: 0,
            hotelId: 0,
            roomTypeId: 0,
            roomNumber: 101,
            floor: 1,
        },
        {
            id: 1,
            hotelId: 1,
            roomTypeId: 2,
            roomNumber: 201,
            floor: 2,
        }
    ];
    bedType: Array<any> = [
        {
            id: 0,
            name: 'Individual'
        },
        {
            id: 1,
            name: 'Doble'
        },
        {
            id: 2,
            name: 'Queen Size'
        },
        {
            id: 3,
            name: 'King Size'
        }
    ];
    numberRooms: number = this.rooms.length - 1;
    updateRoomDrawer: boolean = false;

    constructor(private _snackBar: MatSnackBar) {}

    ngOnInit(): any {
        this.newRoom = {} as Room;
        this.selectHotel = {} as Hotel;
    }

    deleteRoomConfirmation(room): any{
        const confirmDelete = window.confirm(`¿Are you sure to delete Room ${room.roomNumber}?`);

        if(confirmDelete) {
            this.deleteRoom(room);
        }
    }

    deleteRoom(room): any{
        this.rooms =  this.rooms.filter((value)=>{
            if(value.id !== room.id) {return value;}
        });
        this._snackBar.open('Room deleted', 'Okay',{
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
        });
    }

    addRoom(): any{
        console.log(this.selectTypeRoom);
        if(this.newRoom.roomNumber !== undefined && this.selectTypeRoom !== undefined && this.newRoom.floor !== undefined){
            this.numberRooms++;
            this.rooms.push({
                id: this.numberRooms,
                hotelId: this.selectHotel.id,
                roomTypeId: this.selectTypeRoom.id,
                roomNumber: this.newRoom.roomNumber,
                floor: this.newRoom.floor
            });
            this.newRoom = {} as Room;
            this.selectTypeRoom = undefined;
        } else {
            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    updateSelectionRoom(room): any {
        this.updateRoomDrawer = true;
        this.newRoom = room;
        this.roomType.forEach((value)=>{
            if( room.roomTypeId === value.id){
                this.selectTypeRoom = value;
            }
        });

        this.selectRoom = {
            id: null,
            hotelId: this.newRoom.hotelId,
            roomTypeId: this.newRoom.roomTypeId,
            roomNumber: this.newRoom.roomNumber,
            floor: this.newRoom.floor
        };
    }

    updateRoom(): any{
        if((this.newRoom.roomNumber !== undefined && this.newRoom.roomNumber !== null) && (this.newRoom.floor !== undefined && this.newRoom.floor !== null)){
            this.rooms = this.rooms.map((value: Room) =>{
                if(value.id === this.newRoom.id){
                    value= this.newRoom;
                    value.roomTypeId = this.selectTypeRoom.id;
                }
                return value;
            });

            this._snackBar.open('Room updated', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.updateRoomDrawer = false;
            this.newRoom = {} as Room;
            this.selectTypeRoom = undefined;
        }
        else{
            this.rooms = this.rooms.map((value: Room) =>{
                if(value.id === this.newRoom.id){
                    value.hotelId = this.selectRoom.hotelId;
                    value.roomTypeId = this.selectRoom.roomTypeId;
                    value.roomNumber = this.selectRoom.roomNumber;
                    value.floor = this.selectRoom.floor;
                }
                return value;
            });

            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    cancelUpdateRoom(): any{
        this.updateRoomDrawer = false;

        this.rooms = this.rooms.map((value: Room) =>{
            if(value.id === this.newRoom.id){
                value.hotelId = this.selectRoom.hotelId;
                value.roomTypeId = this.selectRoom.roomTypeId;
                value.roomNumber = this.selectRoom.roomNumber;
                value.floor = this.selectRoom.floor;
            }
            return value;
        });

        this.newRoom = {} as Room;
        this.selectTypeRoom = undefined;
    }
}

