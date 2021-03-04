import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/src/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  news$;
  mArticles:Array<any>;
  mSources:Array<any>;

  constructor( private dataService: DataService) { }

  ngOnInit() {

            //load articles
            this.dataService.initArticles().subscribe(data => this.mArticles = data['articles']);
            //load news sources
            this.dataService.initSources().subscribe(data=> this.mSources = data['sources']);  
            }
        
          searchArticles(source){
            console.log("selected source is: "+source);
            this.dataService.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
          }

    
  }


