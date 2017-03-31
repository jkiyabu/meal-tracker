import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h2>List of today's meals</h2>
  <ul>
    <li *ngFor="let currentMeal of childMealList">
      <h3>{{currentMeal.name}}</h3>
      <p>{{currentMeal.details}}</p>
      <p>calories: {{currentMeal.calories}}</p>
    </li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
