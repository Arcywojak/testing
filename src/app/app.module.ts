import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeBgDirective } from './directives/change-bg.directive';
import { StructuralDirectiveDirective } from './directives/structural-directive.directive';
import { StaticSquareComponent } from './componenets/static-square/static-square.component';
import { OnViewAnimationDirective } from './directives/on-view-animation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChangeBgDirective,
    StructuralDirectiveDirective,
    StaticSquareComponent,
    OnViewAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
