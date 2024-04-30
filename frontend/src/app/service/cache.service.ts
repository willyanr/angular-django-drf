
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';




interface CacheContent {
    expiry: number;
    cached: any;
  }

  
@Injectable({
    providedIn: 'root'
  })
  export class CacheService {
    private cache = new Map<string, CacheContent>(); 


    getCache(key: string): Observable<any> | undefined {
      const data = this.cache.get(key);
      console.log('funcao getcache chamada', data)
      if (!data) {
        return undefined;
      }
    
      const now = new Date().getTime();
      if (now > data.expiry) {
        this.cache.delete(key);
        return undefined;
      }
    
      return of(data.cached);
    }
    
      

    setCache(key: string, cached: any, timer: number = 600000): Observable<any> {
      if (this.cache.has(key)){
          throw new Error(`Chave já existe'${key}`);
      }
  
      const expiry = new Date().getTime() + timer;
      this.cache.set(key, { expiry, cached });


      return of(cached);
  }
  
    

  cacheObservable(key: string, fallback: Observable<any>, timer?: number): Observable<any> {
    if (typeof window !== 'undefined' && localStorage !== null) {
      const cached = this.getCache(key);
      const token = localStorage.getItem('token');
  
      if (cached) {
        return cached;
      } else if (!token) {
        console.log('Token não encontrado. Redirecionando para a rota de login.');

        return new Observable();
      } else {
        console.log('Nada em cache. Realizando fallback.');
        return fallback.pipe(
          tap(cachedData => {
            this.setCache(key, cachedData, timer);
            console.log('Cache salvo com sucesso:', cachedData);
          })
        );
      }
    } else {
      console.log('localStorage não está disponível.');
      return new Observable();
    }
  }

  }