import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorComponent } from './color/color.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { TableComponent } from './table/table.component';
import { Blank404Component } from './blank404/blank404.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },

  { path: 'colors', component: ColorComponent },
  { path: 'borders', component: BordersComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'other', component: AnimationsComponent },  
  
  { path: '404', component: Blank404Component },  
  { path: 'blank', component: BlankPageComponent },  
  
  { path: 'chart', component: ChartComponent },    
  { path: 'table', component: TableComponent },  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule { }
