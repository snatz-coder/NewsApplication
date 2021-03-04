import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  news$;

  constructor( private dataService: DataService) { }

  ngOnInit() {

     this.news$ = this.dataService.getNews$();

    
  }

}
