import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
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
@NgModule({
  declarations: [
    DashboardComponent,
    ButtonsComponent,
    CardsComponent,
    ColorComponent,
    BordersComponent,
    AnimationsComponent,
    TableComponent,
    Blank404Component,
    BlankPageComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
