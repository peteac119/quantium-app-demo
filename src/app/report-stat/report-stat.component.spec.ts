import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStatComponent } from './report-stat.component';

describe('ReportStatComponent', () => {
  let component: ReportStatComponent;
  let fixture: ComponentFixture<ReportStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
