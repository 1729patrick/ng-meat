import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';//funcoes para animação
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //para buscar
import { Observable } from 'rxjs/Observable'; //trabalho com erros na busca

import 'rxjs/add/operator/switchMap';//para buscar
import 'rxjs/add/operator/do'; //para buscar
import 'rxjs/add/operator/debounceTime'; //para buscar
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';//trabalho com erros na busca
import 'rxjs/add/observable/from'; //trabalho com erros na busca


import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurants.service';

@Component({
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html',
    animations: [
        trigger('toggleSearch', [
            state('hidden', style({
                opacity: 0,
                "max-height": "0px"
            })),
            state('visible', style({
                opacity: 1,
                "max-height": "70px",
                "margin-top": "20px"
            })),
            transition('* => *', animate('250ms 0s ease-in-out'))
        ])
    ]
})
export class RestaurantsComponent implements OnInit {

    searchBarState = 'hidden';

    restaurants: Restaurant[];

    searchForm: FormGroup;
    searchControl: FormControl;

    constructor(private restaurantService: RestaurantService, private fb: FormBuilder) { }

    ngOnInit() {
        //busca
        this.searchControl = this.fb.control('')
        this.searchForm = this.fb.group({
            searchControl: this.searchControl
        })

        this.searchControl.valueChanges
        .debounceTime(500) //espera 5 segundos para ralizar a pesquisa
        .distinctUntilChanged() //ignora pesquisar repetidas
        .switchMap(searchTerm =>
        this.restaurantService.restaurants(searchTerm)
        .catch(error => Observable.from([])))
        .subscribe(restaurants => this.restaurants = restaurants)

        //fim busca

        this.restaurantService.restaurants() //json
        .subscribe(restaurants => this.restaurants = restaurants);
    }

    toggleSearch() {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
    }

}
