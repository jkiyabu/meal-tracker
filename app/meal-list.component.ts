import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All meals</option>
    <option value="highCalorie">High calorie</option>
    <option value="lowCalories">Low calorie</option>
  </select>
  <br><br>
  <div class="col-md-7">
    <div class="image-col" *ngFor="let currentMeal of childMealList | calories:filterByCalories">
      <h4>name: {{currentMeal.name}}</h4>
      <h4>details: {{currentMeal.details}}</h4>
      <h4>calories: {{currentMeal.calories}}</h4>
      <button class="btn" (click)="editButtonClicked(currentMeal)">Edit</button>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "allMeals";

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
