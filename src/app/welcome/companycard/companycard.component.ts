import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CompanyDetail } from 'src/app/model/companyDetail';

@Component({
  selector: 'app-companycard',
  templateUrl: './companycard.component.html',
  styleUrls: ['./companycard.component.css']
})
export class CompanycardComponent {

  @Input() company: CompanyDetail;
  @Output() eventHandler = new EventEmitter<CompanyDetail>();

  @HostListener('click')
  onSelect() {
    this.eventHandler.emit(this.company);
  }

}
