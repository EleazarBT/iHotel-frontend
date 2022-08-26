import { Component, ViewEncapsulation } from '@angular/core';
import { Guest } from '../../../core/guests/guests.types';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.components.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    selected: Date | null;
    guest1: Guest = {
        id: '1',
        name: 'John',
        lastName: 'Doe',
        email: 'jhon@gmail.com',
        status: 'Payed',
        dayToStay: '15 January - 17 January',
        totalToPay: '100'
    };
    guest2: Guest = {
        id: '2',
        name: 'Pedro',
        lastName: 'Perez',
        email: 'pedro@gmail.com',
        status: 'Payed',
        dayToStay: '16 January - 20 January',
        totalToPay: '200'
    };
    guest3: Guest = {
        id: '3',
        name: 'Maria',
        lastName: 'Cueva',
        email: 'cuevita@gmail.com',
        status: 'Payed',
        dayToStay: '12 January - 14 January',
        totalToPay: '240'
    };
    guest4: Guest = {
        id: '4',
        name: 'Juan',
        lastName: 'Sanchez',
        email: 'juan@gmail.com',
        status: 'Payed',
        dayToStay: '11 January- 13 January',
        totalToPay: '320'
    };

    /**
     * Constructor
     */
    constructor() {

    }


}
