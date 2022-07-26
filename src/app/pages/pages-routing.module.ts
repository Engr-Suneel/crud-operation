import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'dashboard',
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "employees",
    component: EmployeesComponent
  },
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
