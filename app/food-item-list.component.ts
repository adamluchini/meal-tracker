import { Component, EventEmitter } from 'angular2/core';
import { FoodItem } from './food-item.model';
import { FoodItemComponent } from './food-item.component';
import { FoodItemEditComponent } from './food-item-edit.component';
import { CaloriePipe } from './calorie.pipe';
import { FoodItemNewComponent } from './food-item-new.component';

@Component ({
  selector: 'food-item-list',
  inputs: ['foodItemList'],
  directives: [FoodItemComponent, FoodItemEditComponent, FoodItemNewComponent],
  pipes: [CaloriePipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="high">Show High Calorie Foods</option>
    <option value="low">Show Low Calorie Foods</option>
  </select>
  <food-item-display *ngFor="#currentItem of foodItemList | calorie:filterCalorie"
    (click)="itemClicked(currentItem)"
    [class.selected]="currentItem === selectedFoodItem"
    [foodItem] = "currentItem">
  </food-item-display>
  <food-item-edit *ngIf="selectedFoodItem" [foodItem]="selectedFoodItem">
  </food-item-edit>
  <item-new (onSubmitNewFoodItem)="createFoodItem($event)"></item-new>
  `

})

export class FoodItemListComponent{
  public foodItemList: FoodItem[];
  public selectedFoodItem: FoodItem;
  public filterCalorie: string = "";

  constructor() {
  }
  itemClicked(clickedItem: FoodItem): void {
    this.selectedFoodItem = clickedItem;
  }
  createFoodItem(foodItem: FoodItem):void {
    this.foodItemList.push(foodItem);
  }
  onChange(filterOption){
    this.selectedFoodItem = null;
    this.filterCalorie = filterOption;
  }
}
