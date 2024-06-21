import { CommonModule } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterOutlet } from '@angular/router';
import { appConfig } from './app.config';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service.';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CorsInterceptorService } from './services/cors-interceptor.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [CommonModule, BrowserModule, HttpClientModule, RouterOutlet, AppRoutingModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, LoginComponent, DashboardComponent ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }