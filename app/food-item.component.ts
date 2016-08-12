import {Component} from 'angular2/core';
import { FoodItem } from './food-item.model';

@Component ({
  selector: 'food-item-display',
  inputs: ['foodItem'],
  template: `
  <h2>{{foodItem.name}}</h2>
  <p>{{foodItem.details}}</p>
  <p>{{foodItem.calories}}</p>
  `
})
export class FoodItemComponent {
  public foodItem: FoodItem;
}
