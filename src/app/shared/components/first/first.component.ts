import { Component, OnInit } from '@angular/core';

import { Category } from '../../enums/categroy.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string = 'First Component';
  description: string = 'My First Component';
  price: number = 100;
  category: Category = Category.Digital;
  isAvailable: boolean = true;
  reviews: string[] = ["Hello world!", "Excellent!", "The best one!"];
  tags: string[] = ["Angular2+", "Homework"];

  constructor() { }

  ngOnInit(): void {
  }

}
