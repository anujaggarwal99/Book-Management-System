import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
@Component({
//  template: `<div class="bg-warning p-2 text-white">
//  <h3>Product Editor Placeholder</h3>
//  </div>`
templateUrl: "productEditor.component.html"

})
export class ProductEditorComponent {
    
        editing: boolean = false;
        submitted: boolean = false;
        product: Product = new Product();
        constructor(private repository: ProductRepository,
        private router: Router,
        activeRoute: ActivatedRoute) {
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
        Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params["id"]));
        }
        }
        save(form: NgForm) {
                this.submitted = true;
                if (form.valid) {
        this.repository.saveProduct(this.product);{
        this.router.navigateByUrl("/admin/main/products");
        this.editing = true;
        this.submitted = false;
        }
}
}}
 