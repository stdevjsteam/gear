import {Component, OnDestroy, OnInit} from '@angular/core';
import {homeCarousel} from '../../../../../shared/animations/animations';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  animations: homeCarousel
})
export class TopSliderComponent implements OnInit, OnDestroy {

  imagesContainer: Array<string> = ['assets/media/main-slider/1.jpg', 'assets/media/main-slider/2.jpg', 'assets/media/main-slider/3.jpg'];
  currentImageSrc: string = this.imagesContainer[0];
  private currentImgIndex = 0;
  private intervalID: any;

  constructor() {
    this.setAnimationInterval();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.intervalID);
  }

  nextImage() {
    clearInterval(this.intervalID);
    this.setAnimationInterval();
    if (this.currentImgIndex === this.imagesContainer.length - 1) {
      this.currentImgIndex = 0;
      this.currentImageSrc = undefined;
      this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
    } else {
      ++this.currentImgIndex;
        this.currentImageSrc = undefined;
        this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
    }
  }

  prevImage() {
    clearInterval(this.intervalID);
    this.setAnimationInterval();
    if (this.currentImgIndex === 0) {
      this.currentImgIndex = this.imagesContainer.length - 1;
      this.currentImageSrc = undefined;
      this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
    } else {
      --this.currentImgIndex;
        this.currentImageSrc = undefined;
        this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
    }
  }

  setAnimationInterval() {
    this.intervalID = setInterval(() => {
      if (this.currentImgIndex === this.imagesContainer.length - 1) {
        this.currentImgIndex = 0;
        this.currentImageSrc = undefined;
        this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
      } else {
        ++this.currentImgIndex;
          this.currentImageSrc = undefined;
          this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
      }
    }, 15000);

  }
}

