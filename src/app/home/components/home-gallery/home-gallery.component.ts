import { Component } from '@angular/core';
import { PetInfosData } from './home-gallery.data';
import { IGalleryBlock } from './components/home-gallery-block/home-gallery-block.model';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: [ './home-gallery.component.scss' ]
})
export class HomeGalleryComponent {
  petInfos: IGalleryBlock[] = PetInfosData;
  petInfo1: IGalleryBlock[] = [];
  petInfo2: IGalleryBlock[] = [];
  petInfo3: IGalleryBlock[] = [];

  ngOnInit(): void {
    this.setupPetInfos();
  }

  setupPetInfos(): void {
    let count = 0;
    for (let petInfo of this.petInfos) {
      count++;
      if (count == 1){
        this.petInfo1.push(petInfo);
      }
      else if (count == 2){
        this.petInfo2.push(petInfo);
      }
      else {
        this.petInfo3.push(petInfo);
        count = 0;
      }
    }
  }
}
