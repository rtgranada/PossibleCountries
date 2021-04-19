import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    public setItem<T>(key: string, obj: T) : void {
        localStorage.removeItem(key);
        if(typeof(obj) === 'object'){
            localStorage.setItem(key, JSON.stringify(obj));
        }else{
            localStorage.setItem(key, obj.toString());
        }
    }

    public getItem<T>(key : string): any {
      var value = localStorage.getItem(key);
      var a:T;
      if(typeof(a) === 'object') {
        return  JSON.parse(value) as T;
      }
        return value
    }
}
