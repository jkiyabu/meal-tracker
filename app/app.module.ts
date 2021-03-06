import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { AddMealComponent } from './add-meal.component'
import { EditMealComponent } from './edit-meal.component';
import { FormsModule }  from '@angular/forms';
import { CaloriesPipe } from './calories.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    AddMealComponent,
    EditMealComponent,
    CaloriesPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
