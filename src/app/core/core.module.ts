import { NgModule } from '@angular/core';

import { OrderService } from "../order/order.service";
import { RestaurantService } from "../restaurants/restaurants.service";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart-service";

@NgModule({
providers: [ShoppingCartService, RestaurantService, OrderService],
})
export class CoreModule{

}
