import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  menuMode = 'static';

  constructor(
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.translateService.setDefaultLang('zh');
  }
  ngAfterViewInit() {
     console.log('lang ');
     this.translateService.use('zh');
     this.translateService.get('phallus')
      .subscribe(res => this.primengConfig.setTranslation(res));
  }
  translate(lang: string) {
    console.log(lang);
    this.translateService.use(lang);
    this.translateService
     .get('phallus')
     .subscribe(res => this.primengConfig.setTranslation(res));
  }
}
