import { SuperHeroService } from './Services/super-hero.service';
import { Component } from '@angular/core';
import { SuperHero } from './Models/super-hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private SuperHeroService: SuperHeroService){}

  ngOnInit() : void {
    this.SuperHeroService.
    getSuperHeroes()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]){
    this.heroes = heroes;
  }

  initNewHero(){
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero){
    this.heroToEdit = hero;
  }
}
