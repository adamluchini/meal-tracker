import {Pipe, PipeTransform} from 'angular2/core';
import {FoodItem} from './food-item.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: FoodItem[], args) {
    var calorie = args[0];
    if(calorie === "high") {
      return input.filter( (item) =>  {
        return item.calories > 500;
      });
    } else if (calorie === "low") {
      return input.filter( (item) => {
        return item.calories <= 500;
      });
    } else {
      return input;
    }
  }
}
