import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/nav-bar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './Components/home/home.component';
import { BannerComponent } from './Components/banner/banner.component';
import { FilterComponent } from './Components/filter/filter.component';
import { FilterMenuComponent } from './Components/filter-menu/filter-menu.component';
import { MiniNavComponent } from './Components/mini-nav/mini-nav.component';
import { ContentComponent } from './Components/content/content.component';
import { FoodComponent } from './Components/food/food.component';
import { SliderComponent } from './Components/slider/slider.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BannerComponent,
    FilterComponent,
    FilterMenuComponent,
    MiniNavComponent,
    ContentComponent,
    FoodComponent,
    SliderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'',component:HomeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
