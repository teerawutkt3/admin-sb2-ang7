import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [DashboardComponent, ButtonsComponent, CardsComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
