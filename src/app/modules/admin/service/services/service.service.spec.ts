import { TestBed } from '@angular/core/testing';
import {ServiceService} from './service.service';




describe('StudentsService', () => {
    let service: ServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ServiceService);
    });

    it('should create the app', () => {
        expect(service).toBeTruthy();
    });
});
