import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      The best memories come from the craziest ideas. [app-css]
    </p>
  `,
  styles: [`

    p {
      color: teal;
      font-size: 15px
    }

  `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
