import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Clients } from '../model/clients';
import { Product } from '../../product/model/product.service';
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ClientsService {

    //basePath = environment.apiUrl + '/clients';
    basePath = 'http://localhost:5000/clients'
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    clients: Clients[];
    constructor(private http: HttpClient) { }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log(`An error ocurred: ${error.error.message}`);
        } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
        return throwError(() => new Error('Something happened with request, please try again later'));
    }

    public getAllClients(): Observable<Clients> {
        return this.http.get<Clients>(this.basePath, this.httpOptions);
    }

    deleteClient(id: any) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    updateClient(id: any, item: any): Observable<Clients> {
        return this.http.put<Clients>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    createClient(item: any): Observable<Clients> {
        return this.http.post<Clients>(this.basePath, JSON.stringify(item), this.httpOptions);
    }
}
