import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  private charSet =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

  constructor() {}

  public generate(n: number) {
    const res = [];

    for (let i = 0; i < n; i++) {
      res.push(
        this.charSet.charAt(Math.floor(Math.random() * this.charSet.length))
      );
    }

    return res.join('');
  }
}
