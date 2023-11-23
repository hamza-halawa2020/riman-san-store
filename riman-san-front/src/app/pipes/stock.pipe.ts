import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return value ? 'in stock' : 'out of stock';
  }
}