import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { trigger, state, style, transition, animate } from '@angular/animations';//funcoes para animação

@Component({
    selector: 'mt-menu-item',
    templateUrl: './menu-item.component.html',
    //inicio animação
    animations: [
    trigger('menuItemApperead', [
        state('ready', style({opacity: 1})),
        transition('void => ready', [
            style({opacity:0, transform: 'translateY(-20px)'}),
            animate('350ms 0s ease-in')
        ])
    ])
]
//fim animação
})
export class MenuItemComponent implements OnInit {

    menuItemState= 'ready'

    @Input() menuItem: MenuItem
    @Output() add = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    emitAddEvent(){
        this.add.emit(this.menuItem)
    }

}
