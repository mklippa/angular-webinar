import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdGenerator {
  private id: number = 1;

  getNext(): number {
    return this.id++;
  }
}
