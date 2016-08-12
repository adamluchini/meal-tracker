import { Component } from 'angular2/core';
import { FoodItem } from './food-item.model';
import { FoodItemListComponent } from './food-item-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodItemListComponent],
  template: `
  <div class="container">
    <p>Calories Consumed Today:  {{calorieTotal()}}</p>
  </div>
  <div class = "container">
    <h3>
      <food-item-list [foodItemList] = "foodItems">
      </food-item-list>
    </h3>
  </div>
  `
})

export class AppComponent {
  public foodItems: FoodItem[];
   constructor(){
     this.foodItems = [
       new FoodItem("Hamburger", "Didn't get cheese on my burger!", 354)
     ];
   }

   calorieTotal(): number {
  var total = 0;
  for( var foodItem of this.foodItems)
  {
    total = total + foodItem.calories;
  }
  return total;
  }

}
