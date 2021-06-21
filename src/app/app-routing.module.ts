import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 4200
  {
    path:"",
    loadChildren: ()=> import('./home-template/home-template.module').then((m)=>m.HomeTemplateModule),
  },
  // Admin
  {
    path: "admin",
    loadChildren: ()=> import('./admin-template/admin-template.module').then((m)=>m.AdminTemplateModule),
  },
  // Page not found
  {
    path:'**',
    loadChildren: ()=>import('./page-not-found/page-not-found.module').then((m)=>m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
