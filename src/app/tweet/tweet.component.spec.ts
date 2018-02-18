import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetComponent } from './tweet.component';
import { Tweet } from '../models';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tweet card body', async(() => {
    const fixture = TestBed.createComponent(TweetComponent);

    let component = fixture.componentInstance;
    component.tweet = new Tweet(1, 'title', 321, 'body');

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.tweet_user').textContent).toContain('UserId: 321');
    expect(compiled.querySelector('div.tweeet_title').textContent).toContain('Title: title');
  }));
});
