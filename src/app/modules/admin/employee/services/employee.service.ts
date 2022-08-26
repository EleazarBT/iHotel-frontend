import {Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Employee} from '../model/employee.service';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    basePath = 'http://localhost:8891/employees';

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

    getAllEmployee(): Observable<Employee> {
        return this.http.get<Employee>(this.basePath, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    deleteEmployee(id: any) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    updateEmployee(id: any, item: any): Observable<Employee> {
        return this.http.put<Employee>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    createEmployee(item: any): Observable<Employee> {
        return this.http.post<Employee>(this.basePath, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }
}
