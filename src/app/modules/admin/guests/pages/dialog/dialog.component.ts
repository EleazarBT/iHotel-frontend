import { Component, OnInit, Input, ViewEncapsulation, Inject, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, DialogRole } from '@angular/material/dialog';
import { Clients } from '../../model/clients';
import { ClientsService } from '../../services/clients.service';

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
export class RegisterComponent implements OnInit {
    registerForm !: FormGroup;
    actionButton: string = 'Save';
    rooms: Room[] = [
        { value: '4', viewValue: '4' },
        { value: '3', viewValue: '3' },
        { value: '2', viewValue: '2' },
        { value: '1', viewValue: '1' },
    ];
    beds: Room[] = [
        { value: '4', viewValue: '4' },
        { value: '2', viewValue: '2' },
        { value: '1', viewValue: '1' },
        { value: '2', viewValue: '2' },
        { value: '2', viewValue: '2' },
    ];
    bathrooms: Room[] = [
        { value: '1', viewValue: '1' },
        { value: '2', viewValue: '2' },
        { value: '3', viewValue: '3' },
        { value: '4', viewValue: '4' },
    ];
    categories: Room[] = [
        { value: 'Premium', viewValue: 'Premium' },
        { value: 'VIP', viewValue: 'VIP' },
        { value: 'Golden', viewValue: 'Golden' },
    ];



    constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<RegisterComponent>, private clientsService: ClientsService) { }


    ngOnInit(): void {
        this.registerForm = this.formBuilder.group(
            {
                id: [''],
                name: ['', [Validators.required, Validators.minLength(3)]],
                surname: ['', [Validators.required, Validators.min(3)]],
                email: ['', [Validators.required, Validators.email]],
                phoneNumber: ['', [Validators.required]],
                address: ['', [Validators.required]],
                dni: ['', [Validators.required]],
            }
        );
        this.actionButton = this.data.actionButton;
        if (this.data.client) {
            this.registerForm.patchValue(this.data.client);
        };
    }

    action(): void {
        if (this.registerForm.valid) {
            if (this.actionButton === 'Save') {
                console.log(this.registerForm.value);
                alert('Guest registered successfully');
                this.registerForm.disable();
                this.dialogRef.disableClose = true;

                this.clientsService.createClient(this.registerForm.value).subscribe((response) => {
                    console.log(response);
                    this.dialogRef.close('save');
                });

            }

            if (this.actionButton === 'Update') {
                console.log(this.registerForm.value);
                alert('Guest Updated successfully');
                this.registerForm.disable();
                this.dialogRef.disableClose = true;

                this.clientsService.updateClient(this.data.client.id, this.registerForm.value).subscribe((response) => {
                    console.log(response);
                    this.dialogRef.close('save');
                });

            }
        }
    }

}
