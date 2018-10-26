import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
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
    if (this.currentImgIndex === this.imagesContainer.length - 1) {
      this.currentImgIndex = 0;
      this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
    } else {
      ++this.currentImgIndex;
      this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
    }
    clearInterval(this.intervalID);
    this.setAnimationInterval();
  }

  prevImage() {
    if (this.currentImgIndex === 0) {
      this.currentImgIndex = this.imagesContainer.length - 1;
      this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
    } else {
      --this.currentImgIndex;
      this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
    }
    clearInterval(this.intervalID);
    this.setAnimationInterval();
  }

  setAnimationInterval() {
    this.intervalID = setInterval(() => {
      if (this.currentImgIndex === this.imagesContainer.length - 1) {
        this.currentImgIndex = 0;
        this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
      } else {
        ++this.currentImgIndex;
        this.currentImageSrc = this.imagesContainer[this.currentImgIndex];
      }
    }, 7000);
  }

}
