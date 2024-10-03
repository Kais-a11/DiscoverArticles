import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}
    private url="http://127.0.0.1:443/author/";
    
    register(author:any)
    {
      return this.http.post(this.url +'register' , author);
    }

    login(author:any)
    {
      return this.http.post(this.url +'login' , author);
    }

    islogged()
    {
      let token=localStorage.getItem('token');
      if(token)
      {
        return true
      }
      else {
        return false
      }
    }

    getAuthorDataFromToken()
    {
      let token=localStorage.getItem('token');
      if(token)
      {
        let data=JSON.parse(window.atob(token.split('.')[1]))
        return data;
      }
    }

    
    getById(id:any)
    {
      return this.http.get(this.url + 'getbyid/' +id)
      .pipe(
        tap(res => console.log('Données de l\'auteur:', res)),
      );
    }
   
}
