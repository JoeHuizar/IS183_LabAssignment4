import { Component, OnInit } from '@angular/core';

interface ISimilarProduct {
  id?: number;
  image_url: string;
  description: string;
}
@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {


  similarProducts: Array<ISimilarProduct> = [];

  constructor() { }

  ngOnInit() {
    this.similarProducts = [
      {
        image_url: 'assets/img/thumbs/116010.jpg',
        description: 'Old Selfie'
      },
      {
        image_url: 'assets/img/thumbs/120010.jpg',
        description: 'Old Family Portrait'
      },
      {
        image_url: 'assets/img/thumbs/107010.jpg',
        description: 'Selfie with an instrument'
      },
      {
        image_url: 'assets/img/thumbs/106020.jpg',
        description: 'Close up and personal'
      }
    ];
  }

}