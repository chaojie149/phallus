import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MenuService {

    private menuSource = new Subject<any>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(key: any) {
        this.menuSource.next(key);
        console.log(key)
    }

    reset() {
       this.resetSource.next(null);
    }
}
