import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEmphasize]'
})
export class EmphasizeDirective {

  constructor( private el: ElementRef ) {
    console.log('Directive called');
    // el.nativeElement.style.backgroundColor = 'teal';

  }

  @Input('appEmphasize') newColor: any;

  @HostListener('mouseenter') mouseEnter(): void {
    // console.log(this.newColor);
    this.emphasize(this.newColor || 'red');

  }
  @HostListener('mouseout') mouseOut(): void {
    this.emphasize('');
  }

  private emphasize( color: string ): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
