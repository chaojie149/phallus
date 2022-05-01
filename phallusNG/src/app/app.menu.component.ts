import { MenuService } from './service/app.menu.service';
import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'app-menu',
  template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu">
                <li (click)="itemClick($event,item,i)" app-menu class="layout-menuitem" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                <div class="{{i == activeIndex ? 'layout-menuitem-content p-link active':'layout-menuitem-content p-link'}}" pRipple>
                <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">
                  {{item.label}}
                    </div>
                </div>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

  model: any[];

  activeIndex: number;

  constructor(public appMain: AppMainComponent, public menuService: MenuService) { }

  ngOnInit() {
    this.model = [
      { label: '表单', icon: 'pi pi-fw pi-id-card', routerLink: ['/base/hello'] },
      { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
      { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
      { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
      { label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon' },
      { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
      { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
      { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
      { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
      { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
      { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
      { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], preventExact: true },
      { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
      { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
      { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
      { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
    ]
  }

  itemClick(event, item, i): void {
    event.stopPropagation();
    this.activeIndex = i
    this.menuService.onMenuStateChange(item)
  }

}
