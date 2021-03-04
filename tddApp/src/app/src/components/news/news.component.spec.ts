import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { spyOnClass } from 'jasmine-es6-spies'
import { DataService } from '../../services/data.service';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let dataService: jasmine.SpyObj<DataService>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      providers: [{
        provide:DataService, useFactory: () => spyOnClass(DataService)
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show news', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test = "news"]').length).toBe(3);
  });
});
