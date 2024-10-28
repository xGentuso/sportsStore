import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { CommonModule } from "@angular/common";

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html",
})

export class CartSummaryComponent {
    constructor(public cart: Cart) { }
}