import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
    reportsPerDay = [
        {
            id: 1,
            purchasedProductsCount: 5,
            guestRegistered: 6,
            date: '26-05-2022',
            reservedRooms: 20,
            totalAmountEarned: 1500
        },
        {
            id: 2,
            purchasedProductsCount: 5,
            guestRegistered: 6,
            date: '22-05-2022',
            reservedRooms: 20,
            totalAmountEarned: 1500
        },
        {
            id: 3,
            purchasedProductsCount: 5,
            guestRegistered: 6,
            date: '20-05-2022',
            reservedRooms: 20,
            totalAmountEarned: 1500
        },
        {
            id: 4,
            purchasedProductsCount: 5,
            guestRegistered: 6,
            date: '10-05-2022',
            reservedRooms: 20,
            totalAmountEarned: 1500
        },
        {
            id: 5,
            purchasedProductsCount: 5,
            guestRegistered: 6,
            date: '26-04-2022',
            reservedRooms: 20,
            totalAmountEarned: 1500
        }
    ];
    foods = [
        {value: 'day', viewValue: 'Day'},
        {value: 'month', viewValue: 'Month'},
        {value: 'year', viewValue: 'Year'},
    ];
    data: any;
    selectedFilter: string;
  constructor() {
      this.data = null;
  }

  ngOnInit(): void {
  }

    // @ts-ignore
    selectFilterValue(): void {
        const range = {
            day: 0,
            month: 1,
            year: 2
        };
        const newData = new Object({});
        this.reportsPerDay.forEach( (data: any) => {
            // @ts-ignore
            const str = data.date.trim().split('-');
            const t = str[range[this.selectedFilter]];
            if(!newData[t]) {newData[t] = []; }
            newData[t].push(data);
        });
        this.data = Object.entries(newData);
    }
}
