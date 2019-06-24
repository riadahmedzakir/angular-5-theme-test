import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

}
