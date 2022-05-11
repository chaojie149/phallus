import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import {MenuService} from "./service/app.menu.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  constructor(public appMain: AppMainComponent,
              public menuService:MenuService) { }

  items: MenuItem[];

  megaItems: MegaMenuItem[];

  settingMenuItem = {
    label:'设置',
    routerLink:'/system/setting',
    icon:'pi pi-cog'
  }

  ngOnInit() {
  }


  toSetting(){
    this.menuService.onMenuStateChange(this.settingMenuItem)
  }
}
