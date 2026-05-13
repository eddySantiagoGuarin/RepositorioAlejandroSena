import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Calculator } from './components/calculator/calculator';
import { Display } from './components/display/display';
import { Buttons } from './components/buttons/buttons';

@NgModule({
  declarations: [App, Calculator, Display, Buttons],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
