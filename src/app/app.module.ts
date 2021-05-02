import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CompanycardComponent } from './welcome/companycard/companycard.component';
import { ReportStatComponent } from './report-stat/report-stat.component';
import { InvestmentSummaryComponent } from './report-stat/investment-summary/investment-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleChartsModule } from 'angular-google-charts';
import { FundPerformanceComponent } from './report-stat/fund-performance/fund-performance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    CompanycardComponent,
    ReportStatComponent,
    InvestmentSummaryComponent,
    FundPerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
