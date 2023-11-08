import { Component } from '@angular/core';
import { IFaq } from './faq.model';
import { FaqData } from './faq.data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs: IFaq[] = FaqData;
  faqCol1: IFaq[] = [];
  faqCol2: IFaq[] = [];

  ngOnInit(): void {
    this.setupFaqColumns();
  }

  setupFaqColumns(): void {
    for (let i = 0; i < this.faqs.length; i++) {
      let faq = this.faqs[i];
      if (i % 2 == 0){
        this.faqCol1.push(faq);
      }
      else {
        this.faqCol2.push(faq);
      }
    }
  }
}
