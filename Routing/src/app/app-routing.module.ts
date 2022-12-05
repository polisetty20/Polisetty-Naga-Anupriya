import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailListComponent } from './department-detail-list/department-detail-list.component';
import { DepartmentListItIsComponent } from './department-list-it-is/department-list-it-is.component';
import { EmployeeListItIsComponent } from './employee-list-it-is/employee-list-it-is.component';
import { PageNotFoundItIsComponent } from './page-not-found-it-is/page-not-found-it-is.component';
const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full'},

  {path: 'departments', component: DepartmentListItIsComponent},
  {path: 'departments/:id', component: DepartmentDetailListComponent},
  {path: 'employees', component: EmployeeListItIsComponent},
  {path: "**", component:PageNotFoundItIsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListItIsComponent, EmployeeListItIsComponent,PageNotFoundItIsComponent,DepartmentDetailListComponent]

