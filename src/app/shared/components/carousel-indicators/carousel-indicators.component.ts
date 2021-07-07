import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.css']
})
export class CarouselIndicatorsComponent implements OnInit {

  @Input() numero_pagina!: number;
  @Input() store_id!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
