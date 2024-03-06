import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'; 
  //localhost:8080/api/products?size=100' deleted from the base url // Spring Boot API and size=100 is to get all the products
  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId:number): Observable<Product[]>{
    //TODO: need to build URL based on category id...will come back to this!
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;


    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products) 
    );
  }
}
interface GetResponse{
  _embedded:{
    products: Product[];
  }
}
