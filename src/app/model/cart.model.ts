import { Injectable } from "@angular/core";
import { Product } from "./product.model";
@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;
    addLine(product: Product, price: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.price += price;
        } else {
            this.lines.push(new CartLine(product, price));
        }
        this.recalculate();
    }
    updateQuantity(product: Product, price: number) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.price = Number(price);
        }
        this.recalculate();
    }
    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.itemCount += l.price;
            this.cartPrice += (l.price);
        
        })
    }
}
export class CartLine {
    constructor(public product: Product,
        public price: number) { }
    get lineTotal() {
        return this.price;
    }
}
