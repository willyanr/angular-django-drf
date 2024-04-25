
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { modelBox, modelFinancial, modelMenu, modelTransations, modelCategory, modelOrders} from '../models/financial.model';
import { environment } from '../environments/environment'; 
import { Observable, shareReplay } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
    private user: any;
  
    private url = environment.apiUrl

    constructor(private httpClient: HttpClient) { }

    startCashBox(a: modelBox){
      return this.httpClient.post<modelBox[]>('http://127.0.0.1:8000/api/cashbox/', a);

      
    }

    cadastrarVenda(f: modelFinancial){
      return this.httpClient.post<modelFinancial>('http://127.0.0.1:8000/api/sales/', f);
      
    }

    obterDadosFinanceiros(): Observable<modelBox[]>{
      return this.httpClient.get<modelBox[]>('http://127.0.0.1:8000/api/cashbox/');
    }


    obterMenu(){
      return this.httpClient.get<modelMenu[]>('http://127.0.0.1:8000/api/menu/')




    }



    getUser(): Observable<modelBox[]>{
      return this.httpClient.get<modelBox[]>('http://127.0.0.1:8000/user/');
    }

    getSales(){
      return this.httpClient.get<modelFinancial[]>('http://127.0.0.1:8000/api/sales/');
    }
  
  
    getOrdersService(useDateCloseFilter: boolean): Observable<modelOrders[]>{
      let params = new HttpParams();
      params = params.set('use_date_close_filter', useDateCloseFilter.toString());
      console.log('1')
      return this.httpClient.get<modelOrders[]>('http://127.0.0.1:8000/api/orders/',{ params: params }).
      pipe(shareReplay());
      
    }
    
    getTransationsDetails(transactions: modelTransations): Observable<modelTransations> {
      return this.httpClient.get<modelTransations>('http://127.0.0.1:8000/api/transactions/' + transactions + '/');
    }

    getRevenue(){
      return this.httpClient.get<modelBox[]>('http://127.0.0.1:8000/api/box-full/');

    }
    getBoxListFull(){
      return this.httpClient.get<modelBox[]>('http://127.0.0.1:8000/api/box-list-full/');

    }


    updateMenuItemStatus(menu: modelMenu): Observable<modelMenu> {
      return this.httpClient.put<modelMenu>('http://127.0.0.1:8000/api/menu/' + menu.id + '/', menu);
    }
    
    getListCategory(){
      return this.httpClient.get<modelCategory[]>('http://127.0.0.1:8000/api/category/');



    }
    createCategory(menu: modelCategory): Observable<modelCategory> {
      return this.httpClient.post<modelCategory>('http://127.0.0.1:8000/api/category/', menu);
    }

    deleteCategory(id: number)  {
      return this.httpClient.delete<void>('http://127.0.0.1:8000/api/category/' + id + '/');
    }

    createProduct(menu: modelMenu): Observable<modelMenu> {
      return this.httpClient.post<modelMenu>('http://127.0.0.1:8000/api/menu/', menu);
    }
    
    deleteProduct(id: number){
      return this.httpClient.delete<void>('http://127.0.0.1:8000/api/menu/' + id + '/')


    }

    updateProduct(menu: modelMenu): Observable<modelMenu>{
      return this.httpClient.put<modelMenu>('http://127.0.0.1:8000/api/menu/' + menu.id + '/', menu);


    }


    
  


  }












  
  
  
