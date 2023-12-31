import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/Models/super-hero';
import { SuperHeroService } from 'src/app/Services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit{
    @Input() hero?: SuperHero;
    @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

    constructor(private superHeroService: SuperHeroService) { }

    ngOnInit(): void {
        
    }

    updateHero(hero: SuperHero) {
      this.superHeroService.updateHeroes(hero).subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
    }

    deleteHero(hero: SuperHero) {
      this.superHeroService.deleteSuperHeroes(hero).subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
    }

    createHero(hero: SuperHero) {
      this.superHeroService.createHeroes(hero).subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
    }
}
