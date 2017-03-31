import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>{{month}}/{{day}}/{{year}}</h3>

    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <edit-meal [childSelectedMeal]="selectedMeal" (editButtonClickSender)="finishedEditing()"></edit-meal>
    <add-meal (newMealSender)="addMeal($event)"></add-meal>

  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedMeal = null;

  masterMealList: Meal[] = [
    new Meal('Hamburger', 'Did not get a soda or cheese on my burger!', 354),
    new Meal('Ice cream', 'I had two scoops and a cone', 300),
    new Meal('Broccoli', 'one serving', 50),
    new Meal('Oatmeeal', 'I used milk and brown sugar', 170),
    new Meal('Spaghetti', 'I had meat sauce on it', 270),
    new Meal('Steak', '8 oz sirloin', 450)
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
