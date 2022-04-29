import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import router from './data/router/router';

const routes: Routes = router;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
