import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCheck]',
  standalone: true,
})
export class CheckDirective {
  el = inject(ElementRef);
  @Input('appCheck') backgroundColor: string = '';
  constructor() {}
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.backgroundColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
