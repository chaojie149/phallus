import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Injectable()
export class MenuService {

  constructor(private sanitizer: DomSanitizer) {
  }
  private menuSource = new Subject<any>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  onMenuStateChange(key: any) {
    key.routerLink = this.getSafeUrl(key.routerLink)
    this.menuSource.next(key);
  }

  getSafeUrl(routLink): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(window.location.protocol + '//' + window.location.host + '/#' + routLink)
  }

  reset() {
    this.resetSource.next(null);
  }
}
