import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceService} from '../services/service.service';

export interface Services{
    id: number;
    name: string;
    price: number;
}

@Component({
    selector     : 'service',
    templateUrl  : './service.component.html',
    styleUrls  : ['./service.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ServiceComponent implements OnInit
{
    newService: Services;
    updateServiceId: number = null;
    updateServiceDrawer: boolean = false;
    services: Array<Services> = [];
    numberService: number = this.services.length - 1;
    selectService: Services;

    constructor(private _snackBar: MatSnackBar, private serviceService: ServiceService) {}

    ngOnInit(): any {
        this.newService = {} as Services;
        this.getAllServices();
    }

    getAllServices(): void{
        this.serviceService.getAllService().subscribe((response: any) => {
            this.services = response;
        });
    }

    addServiceName(): any {
        if(this.newService.price !== null && this.newService.name !== '')
        {
            console.log(this.newService);
            this.numberService++;
            this.newService.id = 0;
            this.serviceService.createService(this.newService).subscribe((response: any) => {
                this.services.push({...response});
                this.services = this.services.map((o: any) => o);
            });
            this.newService = {} as Services;
        } else {
            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    updateSelectionService(service: Services): any {
        this.updateServiceDrawer = true;
        this.newService = service;

        this.selectService = {
            id: null,
            name: this.newService.name,
            price: this.newService.price,
        };
    }
    deleteService(service: Services): any {
        const confirmDelete = window.confirm(`¿Are you sure to delete ${service.name}?`);

        if(confirmDelete) {
            this.serviceService.deleteService(service.id).subscribe(()=>{
                this.services = this.services.filter((o: Services) => o.id !== service.id ? o:  false);
            });
            this._snackBar.open('Service deleted', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    updateService(): any{
        if(this.newService.price !== null && this.newService.name !== ''){
            this.serviceService.updateService(this.newService.id, this.newService).subscribe((response: any) => {
                this.services = this.services.map((o: Services) => {
                    if(o.id === response.id) {
                        o = response;
                    }
                    return o;
                });
            });

            this._snackBar.open('Service updated', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.updateServiceDrawer = false;
            this.newService.name = '';
            this.newService.price = null;
        }
        else{
            this.services = this.services.map((value: Services) =>{
                if(value.id === this.updateServiceId){
                    value.name = this.selectService.name;
                    value.price = this.selectService.price;
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

    cancelUpdateService(): any{
        this.updateServiceDrawer = false;
        this.services = this.services.map((value: Services) =>{
            if(value.id === this.updateServiceId){
                value.name = this.selectService.name;
                value.price = this.selectService.price;
            }
            return value;
        });
        this.newService.name = '';
        this.newService.price = null;
    }

}




