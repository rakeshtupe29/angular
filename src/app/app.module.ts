import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DataBindingChildComponent } from './data-binding-child/data-binding-child.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { MoveChangeDirective } from './move-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataBindingComponent,
    DataBindingChildComponent,
    DirectiveDemoComponent,
    MoveChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
