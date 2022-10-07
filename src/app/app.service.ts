import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

    getValues(){
        const xpto = this.http.get(`https://ng-course-recipe-book-f4a00-default-rtdb.firebaseio.com/recipes.json`)
        return xpto
    }


}