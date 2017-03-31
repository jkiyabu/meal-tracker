import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>{{month}}/{{day}}/{{year}}</h3>

    <meal-list [childMealList]="masterMealList"></meal-list>

    <add-meal (newMealSender)="addMeal($event)"></add-meal>

  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterMealList: Meal[] = [
    new Meal('Hamburger', 'Did not get a soda or cheese on my burger!', 354),
    new Meal('Fries', 'I only ate half of them', 365),
    new Meal('Ice cream', 'I had two scoops and a cone', 300)
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
