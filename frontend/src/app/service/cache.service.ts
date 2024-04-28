import { get } from 'http';
import { Injectable } from '@angular/core';
import { modelMenu } from '../models/financial.model';
import { Observable, of, tap } from 'rxjs';


interface CacheContent {
    expiry: number;
    cached: modelMenu;
  }

  
@Injectable({
    providedIn: 'root'
  })
  export class CacheService {
    private cache = new Map<string, CacheContent>(); 

    setCache(key: string, cached: modelMenu, timer: number = 600000): Observable<any> { 
        if (this.cache.has(key)){
            throw new Error(`Data already exists for key '${key}'. Use a different key or delete the existing one first.`);
        }
        const expiry = new Date().getTime() + timer;
        this.cache.set(key, { expiry, cached });
        return of(cached);
      }



    getCache(key: string): Observable <modelMenu> | null  {
        const isCached = this.cache.get(key);
        
        if (!isCached){
            return null;
        }

        const now = new Date().getTime();
        const isExpired = now > isCached.expiry;
        
        if (isExpired) {
        this.cache.delete(key);

        }

        return of(isCached.cached)

    }

    cacheObservable(key: string, fallback: Observable<modelMenu>): Observable<modelMenu> | undefined {
        const cached = this.getCache(key);

        if(cached){
            return;
        }
        else{
            return fallback.pipe(
                tap(cached => {
                    this.setCache(key,cached)
                })
            )


        }

    }
  }