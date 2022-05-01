import { MainLayoutComponent } from './view/layout/main-layout/main-layout.component';
import { HelloWorldComponent } from './view/pages/hello-world/hello-world.component';
/*
 * @Author: C.J
 * @Date: 2022-04-29 23:00:55
 * @Last Modified by: C.J
 * @Last Modified time: 2022-04-30 00:16:46
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app.main.component';

const routes: Routes = [
  {
    path: '', component: AppMainComponent,
  },
  {
    path: 'base',
    component: MainLayoutComponent,
    children: [
      {
        path: 'hello', component: HelloWorldComponent,
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
