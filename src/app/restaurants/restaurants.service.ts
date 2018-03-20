import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'

import 'rxjs/add/operator/catch';
import { MEAT_API } from '../app.api'; //json
import { Observable } from 'rxjs/Observable'; //json
import 'rxjs/add/operator/map'; //json
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantService {

    constructor(private http: HttpClient) {
    }

    restaurants(search?: string): Observable<Restaurant[]> { //json
        let params: HttpParams = undefined;
        if (search){
            params = new HttpParams().set('q', search)
        }

        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params});//valor de retorno cru, com erros e toda estrutura
    }

    restaurantById(id: string): Observable<Restaurant>{ //para ver informações ao clicar no restaurante
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
    }

    reviewsOfRestaurant(id: string): Observable<any>{ //para ir ao caminho reviws aopos clicar em algum restaurante
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}
