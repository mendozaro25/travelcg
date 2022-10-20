import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavoritePage } from './favorite.page';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private items$ = new BehaviorSubject<FavoritePage[]>([]);

  getQuoties(){
    return this.items$.asObservable();
  }

  addToQuote(newItem: FavoritePage){
    this.items$.next([...this.items$.getValue(), newItem]);
  }

  removeQuote(id: any){
    this.items$.next(this.items$.getValue().filter((item)=> item.idSitio !== id));
  }
  
}
