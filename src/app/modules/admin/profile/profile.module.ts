import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from 'app/modules/admin/profile/profile.component';
import {MatGridListModule} from '@angular/material/grid-list';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatGridListModule
    ]
})
export class ProfileModule
{
}
