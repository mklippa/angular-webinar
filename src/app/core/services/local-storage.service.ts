import { Injectable, InjectionToken } from '@angular/core';

export const LocalStorage = new InjectionToken<Storage>('Local Storage');

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public setItem(key: string, value: string) {}

  public getItem(key: string): string {
    return '';
  }
}
