import { Component } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  foods:any;

  constructor(private recipe: RecipeService){
  }

  ngOnInit():void{
    this.recipe.getRecipe().subscribe(data => {
      this.foods = data
    })
  }
}
