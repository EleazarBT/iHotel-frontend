import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {Services} from '../pages/service.component';

@Injectable({
    providedIn: 'root'
})

export class ServiceService {
    basePath = 'http://localhost:5000/benefits';

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) { }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log(`An error ocurred: ${error.error.message}`);
        } else {
            console.error ( `Backend returned code ${error.status}, body was: ${error.error}`);
        }
        return throwError( ()  => new Error('Something happened with request, please try again later'));
    }

    getAllService(): Observable<Services> {
        return this.http.get<Services>(this.basePath, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    deleteService(id: any) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    updateService(id: any, item: any): Observable<Services> {
        return this.http.put<Services>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    createService(item: any): Observable<Services> {
        return this.http.post<Services>(this.basePath, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }
}
