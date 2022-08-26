import { TestBed } from '@angular/core/testing';
import {EmployeeService} from './employee.service';



describe('StudentsService', () => {
    let service: EmployeeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmployeeService);
    });

    it('should create the app', () => {
        expect(service).toBeTruthy();
    });
});
