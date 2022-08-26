import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';



const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ReportsComponent
    }
];

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(exampleRoutes),
      MatCardModule,
      MatSelectModule
  ]
})
export class ReportsModule { }
