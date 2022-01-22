import { Injectable } from '@angular/core';
import { IdGenerator } from './gen-id.generator';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  private charSet =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

  constructor(private idGenerator: IdGenerator) {}

  public generate(n: number) {
    const res = [];

    for (let i = 0; i < n; i++) {
      res.push(
        this.charSet.charAt(Math.floor(Math.random() * this.charSet.length))
      );
    }

    return res.join('');
  }

  public getNewID(): number {
    return this.idGenerator.getNext();
  }
}
