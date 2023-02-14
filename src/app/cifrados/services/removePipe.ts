import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'RemovePipePipe' })
export class RemovePipePipe implements PipeTransform {
  transform(value: string): string {
     // Do the stuff to remove the domain name in the value
     return value.replaceAll(`|`, ``);
  }
}