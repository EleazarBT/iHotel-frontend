import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'home' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule) },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule) },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule) },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule) }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule) }
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        data: {
            layout: 'classy'
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/admin/home/home.module').then(m => m.HomeModule) },
            { path: 'hotel', loadChildren: () => import('app/modules/admin/hotel/hotel.module').then(m => m.HotelModule) },
            { path: 'guest', loadChildren: () => import('app/modules/admin/guests/pages/guests.module').then(m => m.GuestsModule) },
            { path: 'reservation', loadChildren: () => import('app/modules/admin/reservation/pages/reservation.module').then(m => m.ReservationModule) },
            { path: 'service', loadChildren: () => import('app/modules/admin/service/pages/service.module').then(m => m.ServiceModule) },
            { path: 'employee', loadChildren: () => import('app/modules/admin/employee/pages/employee.module').then(m => m.EmployeeModule) },
            { path: 'product', loadChildren: () => import('app/modules/admin/product/pages/product.module').then(m => m.ProductModule) },
            { path: 'bill', loadChildren: () => import('app/modules/admin/bill/bill.module').then(m => m.BillModule) },
            { path: 'doc', loadChildren: () => import('app/modules/admin/doc/doc.module').then(m => m.DocModule) },
            { path: 'profile', loadChildren: () => import('app/modules/admin/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'room', loadChildren: () => import('app/modules/admin/room/room.module').then(m => m.RoomModule) },
            { path: 'reports', loadChildren: () => import ('app/modules/admin/reports/reports.module').then(m => m.ReportsModule)}
        ]
    }
];
