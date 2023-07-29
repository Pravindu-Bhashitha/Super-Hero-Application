import { Injectable } from '@angular/core';
import { SuperHero } from '../Models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "SuperHero";

  constructor(private http: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]> {
    
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateHeroes(hero: SuperHero) : Observable<SuperHero[]> {
    
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
    hero
    );
  }

  public createHeroes(hero: SuperHero) : Observable<SuperHero[]> {
    
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
    hero
    );
  }

  public deleteSuperHeroes(hero: SuperHero) : Observable<SuperHero[]> {
    
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${hero.id}`);
  }
}
