import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../../core/user/user.types';
import { UserService } from '../../../core/user/user.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
    /**
     * Constructor
     */
    user: User;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(private _userService: UserService) {

    }

    ngOnInit(): void {
        // Subscribe to the user service
        this._userService.user$
            .pipe((takeUntil(this._unsubscribeAll)))
            .subscribe((user: User) => {
                this.user = user;
            });
    }
}
