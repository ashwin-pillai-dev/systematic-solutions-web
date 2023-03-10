import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';



@NgModule({
  declarations: [
    HomeComponent,
    ComingSoonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
