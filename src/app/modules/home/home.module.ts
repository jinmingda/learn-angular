import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SectionTopComponent } from './components/section-top/section-top.component';

@NgModule({
  declarations: [HomePageComponent, SectionTopComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
