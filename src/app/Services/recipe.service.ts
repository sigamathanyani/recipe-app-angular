import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  readonly Root_URL:string;

  constructor(private http: HttpClient) { 
    this.Root_URL = 'http://localhost:8000';
  }

  createRecipe(){
    
  }

  getRecipe(){
    return this.http.get(`${this.Root_URL}/api/recipes`);
  }
}
