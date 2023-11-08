import { Component } from '@angular/core';
import { ExperiencesData } from './home-experience.data';
import { IExperience } from './home-experience.model';

@Component({
  selector: 'app-home-experience',
  templateUrl: './home-experience.component.html',
  styleUrls: ['./home-experience.component.scss']
})
export class HomeExperienceComponent {
  experienceData: IExperience[][] = [];

  ngOnInit(): void {
    this.getExperienceData();
  }

  getExperienceData(): void {
    let splitCol = 3;
    let splitNumber = Math.ceil(ExperiencesData.length / splitCol);
    let splitCount = 1;

    for (let i = 0; i < splitNumber; i++) {
      let end = splitCount != splitNumber ? splitNumber * splitCount : undefined;
      let data = ExperiencesData.slice(i * splitNumber, end);
      this.experienceData.push(data);
      splitCount++;
    }
  }
}
