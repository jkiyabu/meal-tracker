import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {

  transform(input: Meal[], desiredCalories) {
    var output: Meal[] = [];
    if (desiredCalories === "highCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 350) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "lowCalories") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 350) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
