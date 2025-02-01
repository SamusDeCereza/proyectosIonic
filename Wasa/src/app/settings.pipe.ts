import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settings',
  standalone: true
})
export class SettingsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
