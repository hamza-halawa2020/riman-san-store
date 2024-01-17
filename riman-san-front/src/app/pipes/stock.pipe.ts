import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  transform(value: number, ...args: unknown[]): string {
    const translatedLabel = this.translate.instant(value ? 'in stock' : 'out of stock');
    return translatedLabel;
  }
}