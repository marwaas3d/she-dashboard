import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  results: any[] = [];

  productName: string = '';
  productPrice: number = 0;
  productStock: number = 0;
  coverImg: string = '';

  editingProductId: any = null; 

  constructor(private _ProductsDataService: ProductsDataService) {}

  ngOnInit() {
    this.loadProducts();
  }

  

  loadProducts() {
    this._ProductsDataService.getProducts().subscribe(data => {
      this.results = data;
    });
  }

loadProductToForm(product: any) {
  this.editingProductId = product.id;
  this.productName = product.name;
  this.productPrice = product.price;
  this.productStock = product.stock;
  this.coverImg = product.imgUrl;

  const formElement = document.getElementById('form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
}


addProduct() {
  const productData = {
    name: this.productName,
    price: this.productPrice,
    stock: this.productStock,
    imgUrl: this.coverImg,
  };

  if (this.editingProductId) {
    this._ProductsDataService.updateProduct(this.editingProductId, productData).subscribe({
      next: (response: any) => {
        if (response && response.length > 0) {
          const index = this.results.findIndex(p => p.id === this.editingProductId);
          if (index !== -1) {
            this.results[index] = response[0];
          }
        }
        this.clearForm();
        this.loadProducts()
      },
      error: (err) => {
        console.error('Error updating product:', err);
      }
    });
  } else {
    this._ProductsDataService.addProduct(productData).subscribe({
      next: (response) => {
        // console.log(response)
        this.loadProducts();
        this.clearForm();
      },
      error: (err) => {
        console.error('Error adding product:', err);
      }
    });
  }
}




  clearForm() {
    this.editingProductId = null;
    this.productName = '';
    this.productPrice = 0;
    this.productStock = 0;
    this.coverImg = '';
  }

  deleteProduct(id: string) {
    this._ProductsDataService.deleteProduct(id).subscribe({
      next: () => {
        // console.log('Product deleted');
        this.results = this.results.filter(product => product.id !== id);
      },
      error: (err) => {
        console.error('Error deleting product', err);
      }
    });
  }


}
