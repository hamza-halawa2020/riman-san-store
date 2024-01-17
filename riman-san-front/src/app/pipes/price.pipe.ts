import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: number, ...args: unknown[]): string {
    const currencySymbol = this.translate.instant('EGP');
    return value ? `${value} ${currencySymbol}` : '';
  }
}