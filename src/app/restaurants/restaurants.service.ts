import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'

import 'rxjs/add/operator/catch';
import { MEAT_API } from '../app.api'; //json
import { Observable } from 'rxjs/Observable'; //json
import 'rxjs/add/operator/map'; //json
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantService {

    constructor(private http: Http) {
    }

    restaurants(search?: string): Observable<Restaurant[]> { //json
        return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})//valor de retorno cru, com erros e toda estrutura
        .map(response => response.json()) //resposta tratada para nao mostrar os erros
        .catch(ErrorHandler.handleError);
    }


    restaurantById(id: string): Observable<Restaurant>{ //para ver informações ao clicar no restaurante
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any>{ //para ir ao caminho reviws aopos clicar em algum restaurante
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}
