import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h2>List of today's meals</h2>
  <ul>
    <li *ngFor="let currentMeal of childMealList">
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

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
