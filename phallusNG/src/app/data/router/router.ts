import { HelloWorldComponent } from './../../view/pages/hello-world/hello-world.component';
import { MainLayoutComponent } from './../../view/layout/main-layout/main-layout.component';
const router = [
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HelloWorldComponent
      }
    ]
  }

]

export default router
