import { Component } from 'angular2/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'food-item-edit',
  inputs: ['foodItem'],
  template: `
  <div class="container">
    <h3>Edit</h3>
  <form>
  <div class="form-group row">
    <label for="food-name"class="col-md-2 col-form-label">Name</label>
    <div class="col-md-4">
      <input id="food-name" [(ngModel)]="foodItem.name"  class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="food-details"class="col-md-2 col-form-label">Details</label>
    <div class="col-md-4">
      <input id="food-details" [(ngModel)]="foodItem.details"  class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="food-calories"class="col-md-2 col-form-label">Calories</label>
    <div class="col-md-4">
      <input id="food-calories" [(ngModel)]="foodItem.calories"  class="form-control"/>
    </div>
  </div>
  </form>
</div>
     `
})
export class FoodItemEditComponent {
  public foodItem: FoodItem;
}
