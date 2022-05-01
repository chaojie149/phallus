import { MenuService } from './service/app.menu.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, NgZone, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppMainComponent } from './app.main.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tabview',
  templateUrl: './app.tabview.component.html'
})
export class AppTabViewComponent implements AfterViewInit, OnInit {

  closable: boolean = true

  model: any[];

  activeIndex = 0

  @Input()
  tabs: MenuItem[] = [];

  menuSourceSubscription: Subscription;


  constructor(public appMain: AppMainComponent, public menuService: MenuService,
    public changeDetectorRef: ChangeDetectorRef, public zone: NgZone,
    private sanitizer: DomSanitizer) {

    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
      this.openNewTab(key)
    });
  }

  ngAfterViewInit(): void {
    this.closable = true
  }


  handleClose(e) {
    this.tabs.splice(e.index,1)
    setTimeout(() => {
      if(e.index == 0){
        this.activeIndex = 0
      }
      this.activeIndex = e.index-1
      e.close();
    },10)
  }


  openNewTab(item): void {
    if (this.tabs.indexOf(item) > -1) {
      setTimeout(() => {
        this.activeIndex = this.tabs.indexOf(item) + 1;
      })
    } else {
      item.routerLink = this.sanitizer.bypassSecurityTrustResourceUrl(window.location.protocol + '//' + window.location.host + '/#' + item.routerLink[0])
      console.log(item)
      this.tabs.push(item);
      setTimeout(() => {
        this.activeIndex = this.tabs.length;
      })
    }
  }


  // onContextMenu(event, id) {
  //   console.log(event.originalEvent.target)
  // }

  ngOnInit() {
  }
}
