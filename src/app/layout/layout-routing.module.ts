import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [

      { path: '', loadChildren: '../page/page.module#PageModule' },
      { path: 'blog', loadChildren: '../blog/blog.module#BlogModule' }
      // {
      //   path: 'components',
      //   loadChildren: '../../page/baiwa/baiwa.module#BaiwaModule'
      // }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
