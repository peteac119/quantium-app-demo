import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FundPerformanceComponent } from './report-stat/fund-performance/fund-performance.component';
import { InvestmentSummaryComponent } from './report-stat/investment-summary/investment-summary.component';
import { ReportStatComponent } from './report-stat/report-stat.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'report-stat/:companyId', component: ReportStatComponent, children: [
    {path: 'fund-performance', component: FundPerformanceComponent },
    {path: 'investment-summary', component: InvestmentSummaryComponent},
    {path: '', redirectTo: 'investment-summary', pathMatch: 'full'}
  ]},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
