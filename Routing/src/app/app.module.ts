import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundItIsComponent } from './page-not-found-it-is/page-not-found-it-is.component';
import { DepartmentDetailListComponent } from './department-detail-list/department-detail-list.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundItIsComponent,
    DepartmentDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

