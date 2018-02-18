import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetDetailsComponent } from './tweet-details.component';
import { Tweet } from '../models';

describe('TweetDetailsComponent', () => {
  let component: TweetDetailsComponent;
  let fixture: ComponentFixture<TweetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tweet body', async(() => {
    const fixture = TestBed.createComponent(TweetDetailsComponent);

    let component = fixture.componentInstance;
    component.tweet = new Tweet(1, 'title', 321, 'body');

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.tweet_user').textContent).toContain('User id: User321');
    expect(compiled.querySelector('div.tweet_id').textContent).toContain('Id: 1');
    expect(compiled.querySelector('div.tweet_title').textContent).toContain('Title: title');
    expect(compiled.querySelector('div.tweet_body').textContent).toContain('Body: body');
  }));
});
