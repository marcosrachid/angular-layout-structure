import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
