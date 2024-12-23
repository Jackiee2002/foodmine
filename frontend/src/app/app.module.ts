import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import {   HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [provideHttpClient(withInterceptorsFromDi())],
  declarations: [
    AppComponent,
    LoginPageComponent,
    
    FoodPageComponent,
             
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HomeComponent,
   CommonModule,
   CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    
    ReactiveFormsModule
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }