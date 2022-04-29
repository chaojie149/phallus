import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, RippleModule, BrowserAnimationsModule],
  exports: [ButtonModule, RippleModule, BrowserAnimationsModule],
})
export class PrimeModule {}
