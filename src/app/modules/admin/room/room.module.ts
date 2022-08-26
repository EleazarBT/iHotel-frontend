import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {RoomComponent} from './room.component';
import {TranslocoModule} from '@ngneat/transloco';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const exampleRoutes: Route[] = [
    {
        path     : '',
        component: RoomComponent
    }
];

@NgModule({
    declarations: [
        RoomComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatGridListModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        CommonModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule,
        TranslocoModule
    ]
})
export class RoomModule
{
}
