import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h2>List of today's meals</h2>
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All meals</option>
    <option value="highCalorie">High calorie</option>
    <option value="lowCalories">Low calorie</option>
  </select>
  <hr>
  <div *ngFor="let currentMeal of childMealList | calories:filterByCalories">
    <p>name: {{currentMeal.name}}</p>
    <p>details: {{currentMeal.details}}</p>
    <p>calories: {{currentMeal.calories}}</p>
    <button (click)="editButtonClicked(currentMeal)">Edit</button>
    <hr>
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
