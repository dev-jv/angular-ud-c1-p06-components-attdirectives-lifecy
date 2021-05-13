import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p style="font-size: 15px;">
      Sometimes life can surprise you with a happy coincidence.
    </p>

    <p [ngStyle]="{'font-size':'15px'}">
      Sometimes life can surprise you with a happy coincidence.
    </p>

    <p [ngStyle]="{'font-size':size+'px', 'color':'teal'}">
      Sometimes life can surprise you with a happy coincidence.
    </p>

    <p [style.fontSize]="'15px'">
      Sometimes life can surprise you with a happy coincidence.
    </p>

    <p [style.fontSize.px]="size">
      Sometimes life can surprise you with a happy coincidence.
    </p>

    <button class="btn btn-primary m-1" (click)="size=size+3">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary m-1" (click)="size=size-3">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  size: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
