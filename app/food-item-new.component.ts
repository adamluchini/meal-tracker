import {Component, EventEmitter} from 'angular2/core';
import {FoodItem} from './food-item.model';

@Component({
  selector: 'item-new',
  outputs: ['onSubmitNewFoodItem'],
  template: `
  <div class="food-item-form">
    <h3>Add Food Item:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addFoodItem(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class FoodItemNewComponent {
  public onSubmitNewFoodItem: EventEmitter<FoodItem>;
  constructor(){
    this.onSubmitNewFoodItem = new EventEmitter();
  }
  addFoodItem(foodItemName: HTMLInputElement, foodItemDetails: HTMLInputElement, foodItemCalories: HTMLInputElement){
    var newItem = new FoodItem(foodItemName.value, foodItemDetails.value, Number(foodItemCalories.value));
    this.onSubmitNewFoodItem.emit(newItem);

    foodItemName.value ="";
    foodItemDetails.value="";
    foodItemCalories.value="";
  }
}
