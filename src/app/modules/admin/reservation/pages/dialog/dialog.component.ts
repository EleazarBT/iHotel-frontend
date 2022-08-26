import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit, Input, ViewEncapsulation, Inject, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, DialogRole } from '@angular/material/dialog';


interface Room {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'dialog-register',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RegisterReservationComponent implements OnInit {
    registerForm !: FormGroup;
    actionButton: string = 'Save';
    statuses = ['PENDING', 'CONFIRMED', 'CANCELLED', 'PAYED'];
    constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<RegisterReservationComponent>, private reservationService: ReservationService) { }


    ngOnInit(): void {
        this.registerForm = this.formBuilder.group(
            {
                id: [''],
                status: ['', [Validators.required]],
                reservationDate: ['', [Validators.required]],
                checkInDate: ['', [Validators.required]],
                clientId: ['',[Validators.required]],
            }
        );
        this.actionButton = this.data.actionButton;
        if (this.data.reservation) {
            this.registerForm.patchValue(this.data.reservation);
        };
    }

    action(): void {
        console.log(this.registerForm.value)
        if (this.registerForm.valid) {
            if (this.actionButton === 'Save') {
                console.log(this.registerForm.value);
                alert('Guest registered successfully');
                this.registerForm.disable();
                this.dialogRef.disableClose = true;

                this.reservationService.createReservation(this.registerForm.value).subscribe((response) => {
                    console.log(response);
                    this.dialogRef.close('save');
                });

            }

            if (this.actionButton === 'Update') {
                console.log(this.registerForm.value);
                alert('Guest Updated successfully');
                this.registerForm.disable();
                this.dialogRef.disableClose = true;

                this.reservationService.updateReservation(this.data.reservation.id, this.registerForm.value).subscribe((response) => {
                    console.log(response);
                    this.dialogRef.close('save');
                });

            }
        }
    }

}
