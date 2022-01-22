import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appIncreaseFont]',
})
export class IncreaseFontDirective implements OnInit {
  @Input('appIncreaseFont') size!: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click')
  onClick(): void {
    this.increaseFont();
  }

  private increaseFont(): void {
    const originalSize = this.el.nativeElement.getAttribute(
      'data-original-font-size'
    );
    if (!originalSize) {
      this.render.setAttribute(
        this.el.nativeElement,
        'data-original-font-size',
        window.getComputedStyle(this.el.nativeElement).fontSize
      );
      this.render.setStyle(this.el.nativeElement, 'font-size', this.size);
    } else {
      this.render.removeAttribute(
        this.el.nativeElement,
        'data-original-font-size'
      );
      this.render.setStyle(this.el.nativeElement, 'font-size', originalSize);
    }
  }
}
