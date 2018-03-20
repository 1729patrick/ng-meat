import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Restaurant } from './restaurant/restaurant.model';
import {MenuItem } from '../restaurant-detail/menu-item/menu-item.model'


import { MEAT_API } from '../app.api'; //json
import { Observable } from 'rxjs/Observable'; //json
import 'rxjs/add/operator/map'; //json

@Injectable()
export class RestaurantService {

  constructor(private http: Http) {
  }

  restaurants(): Observable<Restaurant[]> { //json
    return this.http.get(`${MEAT_API}/restaurants`)//valor de retorno cru, com erros e toda estrutura
    .map(response => response.json()); //resposta tratada para nao mostrar os erros
    //  .cath(ErrorHandler.handleError)
  }


  restaurantById(id: string): Observable<Restaurant>{ //para ver informações ao clicar no restaurante
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json());
    //.cath(ErrorHandler.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<any>{ //para ir ao caminho reviws aopos clicar em algum restaurante
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json());
    //.cath(ErrorHandler.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(response => response.json());
    //.cath(ErrorHandler.handleError)
  }
}
