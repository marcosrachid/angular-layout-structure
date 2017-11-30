import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    BrowserModule,
    CommonModule
  ]
})
export class SharedModule { }
