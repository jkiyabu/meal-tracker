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
  <ul>
    <li *ngFor="let currentMeal of childMealList | calories:filterByCalories">
      <h4>{{currentMeal.name}}</h4>
      <p>{{currentMeal.details}}</p>
      <p>calories: {{currentMeal.calories}}</p>
      <button (click)="editButtonClicked(currentMeal)">Edit</button>
    </li>
  </ul>
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
