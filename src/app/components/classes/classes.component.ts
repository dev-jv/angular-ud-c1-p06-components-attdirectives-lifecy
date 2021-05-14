import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [
  ]
})
export class ClassesComponent implements OnInit {

  alert: string = 'alert-danger';
  loading: boolean = false;

  properties: any = {
    danger: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  save(): any {
    this.loading = !this.loading;
    setTimeout(() => {
      this.loading = !this.loading;
    }, 3000);

  }

}
