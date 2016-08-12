import { Component } from 'angular2/core';
import { FoodItem } from './food-item.model';
import { FoodItemComponent } from './food-item.component';

@Component ({
  selector: 'food-item-list',
  inputs: ['foodItemList'],
  directives: [FoodItemComponent],
  template: '
  <food-item-display *ngFor="#currentItem of foodItemList">
  </food-item-display>

  '
})

export class FoodItemListComponent{

}
