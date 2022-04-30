import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'app-tabview',
  templateUrl: './app.tabview.component.html'
})
export class AppTabViewComponent implements AfterViewInit, OnInit {

  closable: boolean = true

  model: any[];

  constructor(public appMain: AppMainComponent) { }

  ngAfterViewInit(): void {
    this.closable = true
  }


  handleClose(e) {
    e.close();
  }

  ngOnInit() {
  }
}
