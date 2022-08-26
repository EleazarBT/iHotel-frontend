import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from './dialog/dialog.component';
import { ClientsService } from '../services/clients.service';
import { Clients } from '../model/clients';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'guests',
    templateUrl: './guests.component.html',
    styleUrls: ['./guests.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GuestsComponent implements OnInit {

    guests: Clients[] = [];
    newClient: Clients = {};
    numberGuests: number = 0;
    updateGuestDrawer: boolean = false;
    selectGuest: Clients;
    constructor(private _snackBar: MatSnackBar, private dialog: MatDialog, private clientsService: ClientsService) {
    }

    ngOnInit(): void {
        this.clientsService.getAllClients().subscribe((response: any) => {
            console.log(response);
            this.guests = response.content;
            this.numberGuests = this.guests.length - 1;
        });
    }

    openDialogRegister(): void {
        this.dialog.open(RegisterComponent, {
            width: '35rem',

        });
    }
    addGuest(): any {
        // if ((this.newClient.name !== undefined && this.newClient.name !== '') && (this.newClient.surname !== undefined && this.newClient.surname !== '')
        //     // eslint-disable-next-line max-len
        //     && (this.newClient.dni !== undefined && this.newClient.dni !== null) &&
        // (this.newClient.address !== undefined && this.newClient.address !== null) && (this.newClient.email !== undefined && this.newClient.email !== null)
        //     && (this.newClient.phoneNumber !== undefined && this.newClient.phoneNumber !== null)) {
        //     console.log(this.newClient);
        //     this.numberGuests++;
        //     this.newClient.id = 0;
        //     this.clientsService.createClient(this.newClient).subscribe((response: any) => {
        //         this.guests.push({ ...response });
        //         this.guests = this.guests.map((o: any) => o);
        //     });
        //     this.newClient = {} as Clients;
        // } else {
        //     this._snackBar.open('Data Invalid', 'Okay', {
        //         duration: 3000,
        //         horizontalPosition: 'end',
        //         verticalPosition: 'top'
        //     });
        // }
        this.clientsService.createClient(this.newClient).subscribe((response: any) => {
            console.log(response);
            this.guests.push({ ...response });
            this.guests = this.guests.map((o: any) => o);
        });

        const dlg = this.dialog.open(RegisterComponent, {
            width: '35rem',
            data: {
                actionButton: 'Save',
                client: this.newClient
            }
        }).afterClosed().subscribe((response: any) => {
            console.log('f');
        });
    }

    updateGuest(): any {
        if ((this.newClient.name !== undefined && this.newClient.name !== '') && (this.newClient.surname !== undefined && this.newClient.surname !== '')
            // eslint-disable-next-line max-len
            && (this.newClient.dni !== undefined && this.newClient.dni !== null) && (this.newClient.address !== undefined && this.newClient.address !== null) && (this.newClient.email !== undefined && this.newClient.email !== null)
            && (this.newClient.phoneNumber !== undefined && this.newClient.phoneNumber !== null)) {
            this.clientsService.updateClient(this.newClient.id, this.newClient).subscribe((response: any) => {
                this.guests = this.guests.map((o: Clients) => {
                    if (o.id === response.id) {
                        o = response;
                    }
                    return o;
                });
            });
            this._snackBar.open('Guest updated', 'Okay', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.updateGuestDrawer = false;
            this.newClient = {} as Clients;
        }
        else {

            this.guests = this.guests.map((value: Clients) => {
                if (value.id === this.newClient.id) {
                    value.name = this.selectGuest.name;
                    value.dni = this.selectGuest.dni;
                    value.email = this.selectGuest.email;
                    value.surname = this.selectGuest.surname;
                    value.phoneNumber = this.selectGuest.phoneNumber;
                    value.address = this.selectGuest.address;
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

    cancelUpdateGuest(): any {
        this.updateGuestDrawer = false;
        this.guests = this.guests.map((value: Clients) => {
            if (value.id === this.newClient.id) {
                value.name = this.selectGuest.name;
                value.dni = this.selectGuest.dni;
                value.email = this.selectGuest.email;
                value.surname = this.selectGuest.surname;
                value.phoneNumber = this.selectGuest.phoneNumber;
                value.address = this.selectGuest.address;
            }
            return value;
        });
        this.newClient = {} as Clients;
    }

    updateSelectionGuest(clients: Clients): any {
        this.updateGuestDrawer = true;
        this.newClient = clients;

        this.selectGuest = {
            id: null,
            name: this.newClient.name,
            surname: this.newClient.surname,
            email: this.newClient.email,
            address: this.newClient.address,
            dni: this.newClient.dni,
            phoneNumber: this.newClient.phoneNumber,
        };
    }
    deleteGuestConfirmation(guest: Clients): any {
        const confirmDelete = window.confirm(`¿Are you sure to delete ${guest.name}?`);

        if (confirmDelete) {
            this.clientsService.deleteClient(guest.id).subscribe(() => {
                this.guests = this.guests.filter((o: Clients) => o.id !== guest.id ? o : false);
            });
            this._snackBar.open('Client deleted', 'Okay', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }
}
