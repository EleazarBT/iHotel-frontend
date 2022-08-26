import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Reservation } from '../model/reservation';


@Injectable({
    providedIn: 'root'
})

export class ReservationService {

    //basePath = environment.apiUrl + '/reservations';
    basePath = 'http://localhost:5000/reservations';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    clients: Reservation[];
    constructor(private http: HttpClient) { }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log(`An error ocurred: ${error.error.message}`);
        } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
        return throwError(() => new Error('Something happened with request, please try again later'));
    }

    public getAllReservations(): Observable<Reservation> {
        return this.http.get<Reservation>(this.basePath, this.httpOptions);
    }

    deleteReservation(id: any) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    updateReservation(id: any, item: any): Observable<Reservation> {
        return this.http.put<Reservation>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    createReservation(item: any): Observable<Reservation> {
        return this.http.post<Reservation>(this.basePath + "/create", JSON.stringify(item), this.httpOptions);
    }
}
