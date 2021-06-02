import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, mergeMap, switchAll, tap, toArray } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://pokeapi.co/api/v2/"
  constructor(
    private http: HttpClient
  ) { }
  
  getPokemon(): Observable<any>{
    const pokeUrl = `${this.url}pokemon/`;
    
    return this.http.get<any>(pokeUrl)
}
  getPokemonByName(name:String){
    const pokeForm = `${this.url}pokemon-form/${name}`
    return this.http.get<any>(pokeForm)
  }
}