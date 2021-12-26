import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  imports: [CommonModule],
  declarations: [FirstComponent, HighlightDirective],
  exports: [FirstComponent, HighlightDirective],
})
export class SharedModule { }
