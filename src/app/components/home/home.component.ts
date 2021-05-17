import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <hr>

    <app-css></app-css>
    <p>The best memories come from the craziest ideas. [app.component]</p>
    <hr>

    <app-classes></app-classes>
    <hr>

    <p [appEmphasize] ="'orange'">The best memories come from the craziest ideas.</p>
    <hr>

    <app-ng-switch></app-ng-switch>
    <hr>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
