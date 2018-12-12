import { Injectable } from '@angular/core';
import {Workers} from "../models/Workers";
import {Ingredients} from "../models/Ingredients";
import {worker} from "cluster";
import {MainFood} from "../models/MainFood";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
ingredients: Ingredients[];
id= 0;
  apiUrl = environment.apiUrl + 'api/ingredients';
constructor(private http: HttpClient) {}


getIngredients(): Observable<Ingredients[]>{
  return this.http.get<Ingredients[]>(this.apiUrl);

}
addIngredient(ingredients: Ingredients) {
  ingredients.id = this.id++;
  this.ingredients.push(ingredients);
}
upgradeIngredient(ingredient:Ingredients){
  const ingToUpdate = this.ingredients.find(ing => ing.id === ingredient.id);
  const index = this.ingredients.indexOf(ingToUpdate);
  this.ingredients[index] = ingredient;
}
deleteIngredient(id: number) {
  this.ingredients = this.ingredients.filter(ing => ing.id !== id);
}

}
