import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
  <h2>Add a meal</h2>
  <div class="form-group">
    <label>Enter meal:</label>
    <input #newName>
  </div>
  <div class="form-group">
    <label>Enter details:</label>
    <input #newDetails>
  </div>
  <div class="form-group">
    <label>Enter calories:</label>
    <input #newCalories>
  </div>
  <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value=''">Add</button>
  `
})

export class AddMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
