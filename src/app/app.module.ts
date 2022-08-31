import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    UsersComponent,
    ErrorHandleComponent,
    ReactiveFormComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
