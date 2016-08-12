import { Component } from 'angular2/core';
import { FoodItem  } from './food-item.model';
import { FoodItemListComponent } from './food-item-list.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h2>Meal</h2>
  </div>
  <div>
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
       new FoodItem("Hamburger", "Didn't get a soda or cheese on my burger!", 354)
     ];
   }

}
