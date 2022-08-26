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
import {BillComponent} from './bill.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: BillComponent
    }
];

@NgModule({
    declarations: [
        BillComponent
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
        MatSelectModule
    ]
})
export class BillModule
{
}
