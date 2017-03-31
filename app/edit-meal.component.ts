import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <h3>Edit Meal</h3>
    <label>Enter meal:</label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Enter details:</label>
    <input [(ngModel)]="childSelectedMeal.details">
    <label>Enter calories:</label>
    <input [(ngModel)]="childSelectedMeal.calories">
    <button (click)="submitEdit()">Submit</button>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() editButtonClickSender = new EventEmitter();

  submitEdit() {
    this.editButtonClickSender.emit();
  }
}
