import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import { ReservationComponent } from './reservation.component';
import { RegisterReservationComponent } from './dialog/dialog.component';
const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ReservationComponent
    }
];

@NgModule({
    declarations: [
        ReservationComponent,
        RegisterReservationComponent,
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatDialogModule,
        MatMenuModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatNativeDateModule,
        MatRippleModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        CommonModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule,
        FormsModule,
        MatCardModule
    ]
})
export class ReservationModule
{
}
