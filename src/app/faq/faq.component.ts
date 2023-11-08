import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs: IFaq[] = [
    {
      question: 'Are you licensed & insured?',
      answer: ''
    },
    {
      question: 'Are you licensed & insured?',
      answer: ''
    },
    {
      question: 'Are you licensed & insured?',
      answer: ''
    },
    {
      question: 'Are you licensed & insured?',
      answer: ''
    },
    {
      question: 'Are you licensed & insured?',
      answer: ''
    },
    {
      question: 'Are you licensed & insured?',
      answer: ''
    }
  ]
}

interface IFaq {
  question: string;
  answer: string;
}
