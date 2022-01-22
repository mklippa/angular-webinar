import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { HighlightDirective } from './directives/highlight.directive';
import { IncreaseFontDirective } from './directives/increase-font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  imports: [CommonModule],
  declarations: [FirstComponent, HighlightDirective, IncreaseFontDirective, OrderByPipe],
  exports: [FirstComponent, HighlightDirective],
})
export class SharedModule { }
