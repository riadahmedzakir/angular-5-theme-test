import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Legion Commander',
    },
    {
      id: 2,
      name: 'Phantom Assassin'
    },
    {
      id: 3,
      name: 'Outworld Devourer'
    }
  ];

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(this.heroes);
  }
}
