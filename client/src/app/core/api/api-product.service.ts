import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/views.model';
import { UtilsService } from '../services/utils.service';
import { IHttpResponse } from 'src/app/shared/models/http.model';
import { IPaths } from 'src/app/shared/models/paths.model';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {
  constructor(private utils: UtilsService) {}

  getProducts(): Observable<IHttpResponse> {
    return this.utils.multiRequests('GET', '/products');
  }

  getProduct(paths: IPaths): Observable<IHttpResponse> {
    return this.utils.multiRequests('GET', paths);
  }

  createProduct(product: IProduct): Observable<IHttpResponse> {
    return this.utils.multiRequests('POST', '/products/add', { body: product });
  }

  editProduct(paths: IPaths, product: IProduct): Observable<IHttpResponse> {
    return this.utils.multiRequests('POST', paths, { body: product });
  }

  removeProduct(paths: IPaths): Observable<IHttpResponse> {
    return this.utils.multiRequests('DELETE', paths);
  }

  // inventoryAdjustment(productId: string, data: any): Observable<IHttpResponse> {
  //   const uri = `products/${productId}/inventory`;
  //   return this.http.post<IHttpResponse>(uri, data);
  // }
}
