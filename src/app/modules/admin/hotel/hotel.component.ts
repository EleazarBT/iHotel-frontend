import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Hotel} from '../components.model';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
    selector     : 'hotel',
    templateUrl  : './hotel.component.html',
    styleUrls  : ['./hotel.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class HotelComponent implements OnInit{
    hotel: Hotel;
    modifyHotelDrawer: boolean = false;
    selectHotel: Hotel;
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
    numberHotels: number = this.hotels.length - 1;

    constructor(private _snackBar: MatSnackBar) {}

    ngOnInit(): any {
        this.hotel = {} as Hotel;
    }

    addHotel(): any {
         if(this.hotel.name !== undefined && this.hotel.description !== undefined && this.hotel.address !== undefined){
            this.numberHotels++;
            this.hotels.push({
                id: this.numberHotels,
                name: this.hotel.name,
                description: this.hotel.description,
                address: this.hotel.address
            });
            this.hotel = {} as Hotel;
        } else {
             this._snackBar.open('Data Invalid', 'Okay',{
                 duration: 3000,
                 horizontalPosition: 'end',
                 verticalPosition: 'top'
             });
         }
    }

    deleteHotel(hotel: Hotel): any {
        this.hotels =  this.hotels.filter((value)=>{
            if(value.id !== hotel.id) {return value;}
        });
        this._snackBar.open('Hotel deleted', 'Okay',{
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
        });
    }

    updateHotel(): any{

        if(this.hotel.name !== ''){
            this.hotels = this.hotels.map((value: Hotel) =>{
                if(value.id === this.hotel.id){
                    value= this.hotel;
                }
                return value;
            });

            this._snackBar.open('Hotel updated', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.modifyHotelDrawer = false;
            this.hotel = {} as Hotel;
        }
        else{
            this.hotels = this.hotels.map((value: Hotel) =>{
                if(value.id === this.hotel.id){
                    value.name= this.selectHotel.name;
                    value.description= this.selectHotel.description;
                    value.address= this.selectHotel.address;
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

    updateSelectionHotel(hotel: Hotel): any {
        this.modifyHotelDrawer = true;
        this.hotel = hotel;
        this.selectHotel = {
            id: null,
            name: this.hotel.name,
            description: this.hotel.description,
            address: this.hotel.address
        };
        console.log(this.selectHotel);
    }

    deleteHotelConfirmation(hotel: Hotel): any {

        const confirmDelete = window.confirm(`¿Are you sure to delete ${hotel.name}?`);

        if(confirmDelete) {
            this.deleteHotel(hotel);
        }
    }

    cancelUpdateHotel(): any {
        this.modifyHotelDrawer = false;

        this.hotels = this.hotels.map((value: Hotel) =>{
            if(value.id === this.hotel.id){
                value.name= this.selectHotel.name;
                value.description= this.selectHotel.description;
                value.address= this.selectHotel.address;
            }
            return value;
        });

        this.hotel = {} as Hotel;
    }

}

