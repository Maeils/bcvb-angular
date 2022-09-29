import {Component, OnInit} from '@angular/core';
import {ImageService, StaffDescription} from "../../image.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ImageService]
})
export class AboutComponent implements OnInit {


  containerCol: number;
  trombinoscopeCol: number;
  imageService: ImageService;
  staff: StaffDescription[];
  carouselSrc: string[];

  constructor(imageService: ImageService) {
    this.imageService = imageService;
    this.containerCol = 2;
    this.trombinoscopeCol = 4;
    this.staff = this.imageService.getStaff();
    this.carouselSrc = this.imageService.getPictures()
  }

  ngOnInit() {
    this.setNumberOfCol(window.innerWidth);
  }

  onResize(event: any) {
    this.setNumberOfCol(event.target.innerWidth);
  }

  private setNumberOfCol(width: number) {
    if (width <= 700) {
      this.containerCol = 1;
      this.trombinoscopeCol = 2;
    } else {
      this.containerCol = 2;
      this.trombinoscopeCol = 4;
    }
  }
}
