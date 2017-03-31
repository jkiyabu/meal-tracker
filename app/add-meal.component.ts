import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
  <div class="col-md-5 image-col">
    <h2>Add a meal</h2>
    <form>
    <div class="form-group">
      <label>Enter meal name</label>
      <input class="form-control" #newName>
    </div>
    <div class="form-group">
      <label>Enter details:</label>
      <input class="form-control" #newDetails>
    </div>
    <div class="form-group">
      <label>Enter calories:</label>
      <input class="form-control" #newCalories>
    </div>
    <button class="btn"(click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value=''">Add</button>
    </form>
  </div>
  `
})

export class AddMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
