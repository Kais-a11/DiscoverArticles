import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  private url='http://127.0.0.1:443/article';

  create(article:any){
    return this.http.post(this.url +'/ajout',article);
  }

  getAll()
  {
    return this.http.get(this.url + '/all');
  }

  getArticleByIdAuthor(id:any)
  {
    return this.http.get(this.url + '/getByidauthor/' + id);
  }

  getArticleById(id:any)
  {
    return this.http.get(this.url + '/getByid/' + id);
  }

  updateArticle(id: any, article: any) {
    const url = `${this.url}/update/${id}`; // Remplacez par l'URL de l'API pour mettre à jour un article spécifique
  
    return this.http.put(url, article);
  }

}
