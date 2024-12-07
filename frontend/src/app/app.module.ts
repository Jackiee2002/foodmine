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

@NgModule({
  
  declarations: [
    AppComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HomeComponent,
   CommonModule,
   
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }