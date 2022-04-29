import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule
  ],
  exports: [
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
})
export class SharedModule { }