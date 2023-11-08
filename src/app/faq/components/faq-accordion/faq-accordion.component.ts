import { Component, Input } from '@angular/core';
import { IFaq } from '../../faq.model';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.scss']
})
export class FaqAccordionComponent {
  @Input() faqs: IFaq[] = [];
}
