import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AngularMaterialModule } from './angular-material-modules/angular-material.module';
import { BooksComponent } from './books/books.component';
import { ReusableUiModule } from './components/reusable-components/reusable-ui.module';
@NgModule({
    declarations: [AppComponent, SideNavComponent, BooksComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule, ReusableUiModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
