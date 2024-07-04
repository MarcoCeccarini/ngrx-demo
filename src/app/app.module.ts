import { CommonModule } from '@angular/common';
import { NgModule, isDevMode }      from '@angular/core';
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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { DashboardDetailComponent } from './dashboard/dashboard-detail/dashboard-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoComponent } from './todo/todo.component';
import { GenericCrudComponent } from './generic-crud/generic-crud.component';
import { TodoService } from './todo/todo.service';
import { GenericService } from './services/generic.service';

@NgModule({
  imports:      [CommonModule, BrowserModule, HttpClientModule, RouterOutlet, AppRoutingModule, FormsModule ,ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, DashboardDetailComponent, TodoComponent, GenericCrudComponent],
  providers: [
    AuthService,TodoService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: CorsInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    provideAnimationsAsync()
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }