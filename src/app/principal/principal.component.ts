import { Component, OnInit} from '@angular/core';
import {MatHint} from '@angular/material/form-field';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
    title = 'Occupants analytics';
    type = 'PieChart';
    data = [
        ['Free', 75.0],
        ['Busy',25.0]
    ];
    columnNames = ['Browser', 'Percentage'];
    options = {
        pieHole:0.4
    };
    width = 550;
    height = 400;
    constructor() { }

    ngOnInit(): void {

    }
}
