import {Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Product} from "../model/product.service";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    basePath = 'http://localhost:5000/products';

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

    getAllProduct(): Observable<Product> {
        return this.http.get<Product>(this.basePath, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    deleteProduct(id: any) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    updateProduct(id: any, item: any): Observable<Product> {
        return this.http.put<Product>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    createProduct(item: any): Observable<Product> {
        return this.http.post<Product>(this.basePath, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }
}
