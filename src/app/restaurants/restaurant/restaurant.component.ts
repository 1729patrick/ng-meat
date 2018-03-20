import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';//funcoes para animação

import { Restaurant } from './restaurant.model';

@Component({
    selector: 'mt-restaurant',
    templateUrl: './restaurant.component.html',
    //inicio notificação
    animations:[
    trigger('restauranteApperead', [
        state('ready', style({opacity: 1})),
        transition('void => ready', [
            style({opacity:0, transform: 'translate(-30px, -10px)'}),
            animate('50ms 0s ease-in-out')
        ])
    ])
]
//fim notificação
})
export class RestaurantComponent implements OnInit {

    restaurantState = 'ready'; //notificação

    @Input() restaurant: Restaurant;

    constructor() { }

    ngOnInit() {
    }

}
