import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {

  constructor(private auth:AuthService,private data:DataService,private router:Router,private route:ActivatedRoute){}
  article:any ={
    title:'',
    description:'',
    content:'',
    tags:[]

  }
  tag:any='';

  image:any;

  select(e:any){
    this.image=e.target.files[0];
  }

  create(){
    let fd=new FormData()
    fd.append('title', this.article.title);
    fd.append('description', this.article.description);
    fd.append('content', this.article.content);
    fd.append('tags', this.article.tags.toString());
    fd.append('image', this.image);
    fd.append('idauthor', this.auth.getAuthorDataFromToken()._id)
    this.data.create(fd)
    .subscribe(
      res=>
      {
        this.router.navigate(['/home']);
      },
      err=>{
        console.log(err)
      }

    )

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        // Charger les informations de l'article correspondant à partir de l'ID
        this.data.getArticleById(id).subscribe(
          (articleToUpdate: any) => {
            if (articleToUpdate) {
              this.article = articleToUpdate;
            } else {
              console.error('Article non trouvé');
            }
          },
          error => {
            console.error('Erreur lors de la récupération de l\'article', error);
          }
        );
      }
    });
  }

  updateArticle(id: any) {
    this.data.updateArticle(id, this.article).subscribe(
      (res: any) => {
        this.updateArticle = res;
        this.router.navigate(['/home']);
        console.log('Article mis à jour avec succès', res);
        // Effectuez des actions supplémentaires après la mise à jour de l'article si nécessaire
      },
      error => {
        console.error('Erreur lors de la mise à jour de l\'article', error);
      }
    );
  }

  

}
