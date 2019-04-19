import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorComponent } from './color/color.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
@NgModule({
  declarations: [DashboardComponent, ButtonsComponent, CardsComponent, ColorComponent, BordersComponent, AnimationsComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
