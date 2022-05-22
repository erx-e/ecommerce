import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { ProductsComponent } from './components/products/products.component';
import { ImgComponent } from './components/img/img.component';
import { ReversePipe } from '../shared/pipes/pipes/reverse.pipe';
import { TimeAgoPipe } from '../shared/pipes/pipes/time-ago.pipe';
import { ProductComponent } from './components/product/product.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ProductsComponent,
    ImgComponent,
  ],
  imports: [CommonModule, SwiperModule, RouterModule],
  exports: [
    ProductComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ProductsComponent,
    ImgComponent,
  ],
})
export class SharedModule {}
