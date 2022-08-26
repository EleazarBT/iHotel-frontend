import { TestBed } from '@angular/core/testing';
import {ProductService} from './product.service';



describe('StudentsService', () => {
    let service: ProductService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProductService);
    });

    it('should create the app', () => {
        expect(service).toBeTruthy();
    });
});
