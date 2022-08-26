import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from '../model/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../services/product.service';
import {Employee} from '../../employee/model/employee.service';

@Component({
    selector: 'hotel',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProductComponent implements OnInit{
    newProduct: Product;
    updateProductDrawer: boolean = false;
    products: Array<Product> = [];
    numberProducts: number = this.products.length - 1;
    selectProduct: Product;

    constructor(private _snackBar: MatSnackBar, private productService: ProductService) {}

    ngOnInit(): any {
        this.newProduct = {} as Product;
        this.getAllProduct();
    }


    getAllProduct(): void {
        this.productService.getAllProduct().subscribe((response: any) => {
            this.products = response;
        });
    }

    addProduct(): any {
        if((this.newProduct.name !== undefined && this.newProduct.name !== '') && (this.newProduct.brandName !== undefined && this.newProduct.brandName !== '')
            &&  (this.newProduct.price !== undefined && this.newProduct.price !== null) ) {
            console.log(this.newProduct);
            this.numberProducts++;
            this.newProduct.id = 0;
            this.productService.createProduct(this.newProduct).subscribe((response: any) => {
                this.products.push({...response});
                this.products = this.products.map((o: any) => o);
            });
            this.newProduct = {} as Product;
        } else {
            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    updateProduct(): any {
        if((this.newProduct.name !== undefined && this.newProduct.name !== '') && (this.newProduct.brandName !== undefined && this.newProduct.brandName !== '')
            &&  (this.newProduct.price !== undefined && this.newProduct.price !== null) ) {
            this.productService.updateProduct(this.newProduct.id, this.newProduct).subscribe((response: any) => {
                this.products = this.products.map((o: Product) => {
                    if(o.id === response.id) {
                        o = response;
                    }
                    return o;
                });
            });
            this._snackBar.open('Product updated', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.updateProductDrawer = false;
            this.newProduct = {} as Product;
        }
        else {

            this.products = this.products.map((value: Product) => {
                if(value.id === this.newProduct.id) {
                    value.name = this.selectProduct.name;
                    value.brandName = this.selectProduct.brandName;
                    value.price = this.selectProduct.price;
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

    cancelUpdateProduct(): any {
        this.updateProductDrawer = false;
        this.products = this.products.map((value: Product) => {
            if(value.id === this.newProduct.id) {
                value.name = this.selectProduct.name;
                value.brandName = this.selectProduct.brandName;
                value.price = this.selectProduct.price;
            }
            return value;
        });
        this.newProduct = {} as Product;
    }

    updateSelectionProduct(product: Product): any {
        this.updateProductDrawer = true;
        this.newProduct =  product;

        this.selectProduct = {
            id: null,
            name: this.newProduct.name,
            brandName: this.newProduct.brandName,
            price: this.newProduct.price
        };
    }

    deleteProductConfirmation(product: Product): any {
        const confirmDelete = window.confirm(`¿Are you sure to delete ${product.name}?`);

        if(confirmDelete) {
            this.productService.deleteProduct(product.id).subscribe(()=>{
                this.products = this.products.filter((o: Product) => o.id !== product.id ? o:  false);
            });
            this._snackBar.open('Product deleted', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }



}


