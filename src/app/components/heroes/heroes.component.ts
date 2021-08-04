import { Component, OnInit } from '@angular/core';

import { Hero } from '../../Hero';
import { HeroService } from 'src/app/services/hero.service';
import { ZgsService } from 'src/app/services/zgs.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private zgsService: ZgsService) {}

  ngOnInit(): void {
    this.getHeroes();
    this.displayData();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  displayData() {
    this.zgsService.getData();
  }
}
