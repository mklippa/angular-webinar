import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter', )
  onMouseEnter(): void {
    this.backgroundColor = 'floralwhite';
  }

  @HostListener('mouseleave')
  onMouseLeave(target: HTMLElement): void {
    this.backgroundColor = 'initial';
  }

}
