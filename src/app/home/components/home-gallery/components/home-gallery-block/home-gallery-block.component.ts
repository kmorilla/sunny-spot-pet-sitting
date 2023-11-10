import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IGalleryBlock } from './home-gallery-block.model';

@Component({
  selector: 'app-home-gallery-block',
  templateUrl: './home-gallery-block.component.html',
  styleUrls: ['./home-gallery-block.component.scss']
})
export class HomeGalleryBlockComponent implements OnChanges {
  @Input() galleryBlock!: IGalleryBlock;
  style: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.setupStyle();
  }

  setupStyle(): void {
    let backgroundImage = `background-image: url("~/../assets/img/${this.galleryBlock.image}"); `
    let backgroundPosition = 'background-position: ';
    backgroundPosition += this.galleryBlock.position == undefined ? 'center center;' : this.galleryBlock.position;
    this.style = backgroundImage + backgroundPosition;
  }
}
