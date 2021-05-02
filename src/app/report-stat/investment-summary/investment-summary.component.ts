import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-summary',
  templateUrl: './investment-summary.component.html',
  styleUrls: ['./investment-summary.component.css']
})
export class InvestmentSummaryComponent implements OnInit {

  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {      
  };
  width = 550
  height = 400
  

  constructor() { }

  ngOnInit(): void {
  }

}
