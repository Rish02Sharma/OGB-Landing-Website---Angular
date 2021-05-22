import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { AboutComponent } from './about/about.component';
import { ProcessComponent } from './process/process.component';
import { HeaderBlackComponent } from './shared/header-black/header-black.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PackagesComponent,
    AboutComponent,
    ProcessComponent,
    HeaderBlackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
