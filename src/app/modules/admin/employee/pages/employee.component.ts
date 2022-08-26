import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Room} from '../../components.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Employee} from '../model/employee.service';
import {EmployeeService} from '../services/employee.service';



@Component({
    selector     : 'employee',
    templateUrl  : './employee.component.html',
    styleUrls  : ['./employee.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeeComponent implements OnInit {
    newEmployee: Employee;
    updateEmployeeDrawer: boolean = false;
    employee: Array<Employee> = [];
    numberEmployee: number = this.employee.length - 1;
    selectEmployee: Employee;

    constructor(private _snackBar: MatSnackBar, private employeeService: EmployeeService) {}

    ngOnInit(): any {
        this.newEmployee = {} as Employee;
        this.getAllEmployees();
    }

    getAllEmployees(): void{
        this.employeeService.getAllEmployee().subscribe((response: any) => {
            this.employee = response;
            });
    }

    addEmployee(): any {
        if((this.newEmployee.phoneNumber !== undefined && this.newEmployee.phoneNumber !== '')  && (this.newEmployee.name !== undefined && this.newEmployee.name !== '')
            && (this.newEmployee.dni !== undefined && this.newEmployee.dni !== '') &&
            (this.newEmployee.type !== undefined && this.newEmployee.type !== '')){
            console.log(this.newEmployee);
            this.numberEmployee++;
            this.newEmployee.id = 0;
            this.employeeService.createEmployee(this.newEmployee).subscribe((response: any) => {
                this.employee.push({...response});
                this.employee = this.employee.map((o: any) => o);
                });
            this.newEmployee = {} as Employee;
        } else {
            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }

    }

    updateEmployee(): any{
        if((this.newEmployee.phoneNumber !== undefined && this.newEmployee.phoneNumber !== '')  && (this.newEmployee.name !== undefined && this.newEmployee.name !== '')
            && (this.newEmployee.dni !== undefined && this.newEmployee.dni !== '') &&
            (this.newEmployee.type !== undefined && this.newEmployee.type !== '')){
            this.employeeService.updateEmployee(this.newEmployee.id, this.newEmployee).subscribe((response: any) => {
                this.employee = this.employee.map((o: Employee) => {
                    if(o.id === response.id) {
                        o = response;
                    }
                    return o;
                });
            }) ;

            this._snackBar.open('Employee updated', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.updateEmployeeDrawer = false;
            this.newEmployee = {} as Employee;
        }
        else{
            this.employee = this.employee.map((value: Employee) =>{
                if(value.id === this.newEmployee.id){
                    value.name = this.selectEmployee.name;
                    value.dni = this.selectEmployee.dni;
                    value.phoneNumber = this.selectEmployee.phoneNumber;
                    value.type = this.selectEmployee.type;
                }
                return value;
            });

            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    cancelUpdateEmployee(): any{
        this.updateEmployeeDrawer = false;

        this.employee = this.employee.map((value: Employee) =>{
            if(value.id === this.newEmployee.id){
                value.name = this.selectEmployee.name;
                value.dni = this.selectEmployee.dni;
                value.phoneNumber = this.selectEmployee.phoneNumber;
                value.type = this.selectEmployee.type;
            }
            return value;
        });

        this.newEmployee = {} as Employee;
    }

    updateSelectionEmployee(employee: Employee): any {
        this.updateEmployeeDrawer = true;
        this.newEmployee = employee;

        this.selectEmployee = {
            id: null,
            name: this.newEmployee.name,
            dni: this.newEmployee.dni,
            phoneNumber: this.newEmployee.phoneNumber,
            type: this.newEmployee.type
        };
    }

    deleteEmployeeConfirmation(employee: Employee): any {
        const confirmDelete = window.confirm(`¿Are you sure to delete ${employee.name}?`);

        if(confirmDelete) {

            this.employeeService.deleteEmployee(employee.id).subscribe(()=>{
                this.employee = this.employee.filter((o: Employee) => o.id !== employee.id ? o:  false);
            });
            this._snackBar.open('Employee deleted', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }
}

