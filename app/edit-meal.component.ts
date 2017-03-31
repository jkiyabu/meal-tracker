import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="col-md-5 image-col" *ngIf="childSelectedMeal">
    <h2>Edit {{childSelectedMeal.name}}</h2>
    <div class="form-group">
      <label>Enter meal:</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.name">
    </div>
    <div class="form-group">
      <label>Enter details:</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.details">
    </div>
    <div class="form-group">
      <label>Enter calories:</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
    </div>
    <button class="btn" (click)="submitEdit()">Submit</button>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() editButtonClickSender = new EventEmitter();

  submitEdit() {
    this.editButtonClickSender.emit();
  }
}
