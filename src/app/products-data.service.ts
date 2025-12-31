import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private _HttpClient : HttpClient) {}

      getProducts() :Observable<any>{
         return this._HttpClient.get(`https://6953df0aa319a928023cf23c.mockapi.io/she/products`)
      }



      addProduct(product: any): Observable<any> {
        return this._HttpClient.post(
          `https://6953df0aa319a928023cf23c.mockapi.io/she/products`,
          product
        );
      }





      deleteProduct(id: string): Observable<any> {
        return this._HttpClient.delete(
          `https://6953df0aa319a928023cf23c.mockapi.io/she/products/${id}`
        );
      }




      updateProduct(id: string, product: any): Observable<any> {
        return this._HttpClient.put(
             `https://6953df0aa319a928023cf23c.mockapi.io/she/products/${id}`,product);
      }





}
