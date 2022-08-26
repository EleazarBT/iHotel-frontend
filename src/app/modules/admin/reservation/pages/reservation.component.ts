import { ReservationService } from './../services/reservation.service';
import { Reservation } from './../model/reservation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterReservationComponent } from './dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'reservation',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ReservationComponent implements OnInit {

    reservations: Reservation[] = [];
    newReservation: Reservation = {};
    numberReservations: number = 0;
    updateReservationDrawer: boolean = false;
    selectReservation: Reservation;
    statuses = [
        { value: 'PENDING', viewValue: 'PENDING' },
        { value: 'CONFIRMED', viewValue: 'CONFIRMED' },
        { value: 'CANCELLED', viewValue: 'CANCELLED' },
        { value: 'PAYED', viewValue: 'PAYED' }
    ];
    selectedStatus: string;
    eventSelection(event){
        this.selectedStatus = event.value
       }

    constructor(private _snackBar: MatSnackBar, private dialog: MatDialog, private reservationService: ReservationService) {
    }


    ngOnInit(): void {
        this.reservationService.getAllReservations().subscribe((response: any) => {
            console.log(response);
            this.reservations = response.content;
            this.numberReservations = this.reservations.length - 1;
        });
    }

    openDialogRegister(): void {
        this.dialog.open(RegisterReservationComponent, {
            width: '35rem',

        });
    }
    addReservation(): any {
        console.log(this.newReservation.reservationDate);
        this.reservationService.createReservation(this.newReservation).subscribe((response: any) => {
            console.log(response);
            this.reservations.push({ ...response });
            this.reservations = this.reservations.map((o: any) => o);
        });

        const dlg = this.dialog.open(RegisterReservationComponent, {
            width: '35rem',
            data: {
                actionButton: 'Save',
                reservation: this.newReservation
            }
        }).afterClosed().subscribe((response: any) => {
            console.log('f');
        });
    }

    updateReservation(): any {
        if ((this.newReservation.status !== undefined && this.newReservation.status !== '') && (this.newReservation.reservationDate !== undefined && this.newReservation.reservationDate !== '')
            // eslint-disable-next-line max-len
            && (this.newReservation.checkInDate !== undefined && this.newReservation.checkInDate !== null) && (this.newReservation.clientId !== undefined && this.newReservation.clientId !== null)) {
            console.log(this.newReservation.id)
            this.reservationService.updateReservation(this.newReservation.id, this.newReservation).subscribe((response: any) => {
                this.reservations = this.reservations.map((o: Reservation) => {
                    if (o.id === response.id) {
                        o = response;
                    }
                    return o;
                });
            });
            this._snackBar.open('Reservation updated', 'Okay', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.updateReservationDrawer = false;
            this.newReservation = {} as Reservation;
        }
        else {

            this.reservations = this.reservations.map((value: Reservation) => {
                if (value.id === this.newReservation.id) {
                    value.status = this.selectReservation.status;
                    value.reservationDate = this.selectReservation.reservationDate;
                    value.checkInDate = this.selectReservation.checkInDate;
                    value.clientId= this.selectReservation.clientId;
                }
                return value;
            });
            this._snackBar.open('Data Invalid', 'Okay', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }

    }

    cancelUpdateReservation(): any {
        this.updateReservationDrawer = false;
        this.reservations = this.reservations.map((value: Reservation) => {
            if (value.id === this.newReservation.id) {
                value.status = this.selectReservation.status;
                value.reservationDate = this.selectReservation.reservationDate;
                value.checkInDate = this.selectReservation.checkInDate;
                value.clientId = this.selectReservation.clientId;
            }
            return value;
        });
        this.newReservation = {} as Reservation;
    }

    updateSelectionReservation(reservation: Reservation): any {
        this.updateReservationDrawer = true;
        this.newReservation = reservation;

        this.selectReservation = {
            id: null,
            status: this.newReservation.status,
            reservationDate: this.newReservation.reservationDate,
            checkInDate: this.newReservation.checkInDate,
            clientId:this.newReservation.clientId,
        };
    }
    deleteReservationConfirmation(reservation: Reservation): any {
        const confirmDelete = window.confirm(`¿Are you sure to delete ${reservation.id}?`);

        if (confirmDelete) {
            this.reservationService.deleteReservation(reservation.id).subscribe(() => {
                this.reservations = this.reservations.filter((o: Reservation) => o.id !== reservation.id ? o : false);
            });
            this._snackBar.open('Reservation deleted', 'Okay', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }
}
