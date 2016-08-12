import {Component} from 'angular2/core';
import { FoodItem } from './food-item.model';

@Component ({
  selector: 'food-item-display',
  inputs: ['foodItem'],
  template: `
  OBJECTS GO HERE
  `
})
export class FoodItemComponent {
  public foodItem: FoodItem;
}
