import { AppTabViewComponent } from './app.tabview.component';
import { AppMenuComponent } from './app.menu.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMainComponent } from './app.main.component';
import { AppConfigComponent } from './app.config.component';
import { AppConfig } from './api/appconfig';
import { AppTopBarComponent } from './app.topbar.component';
/*
 * @Author: C.J
 * @Date: 2022-04-30 00:01:15
 * @Last Modified by: C.J
 * @Last Modified time: 2022-04-30 16:17:47
 */
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MainLayoutComponent } from './view/layout/main-layout/main-layout.component';
import { SharedModule } from './shared/shared/shared.module';
import { HelloWorldComponent } from './view/pages/hello-world/hello-world.component';


import { CountryService } from './service/countryservice';
import { CustomerService } from './service/customerservice';
import { EventService } from './service/eventservice';
import { IconService } from './service/iconservice';
import { NodeService } from './service/nodeservice';
import { PhotoService } from './service/photoservice';
import { ProductService } from './service/productservice';
import { MenuService } from './service/app.menu.service';
import { ConfigService } from './service/app.config.service';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './view/pages/main-page/main-page.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppConfigComponent,
    AppMainComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppTabViewComponent,
    MainLayoutComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, MenuService, ConfigService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
