import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { AlertType, Alert } from '../models';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render header and body', async(() => {
    const fixture = TestBed.createComponent(AlertComponent);

    let component = fixture.componentInstance;
    component.alert = new Alert(AlertType.SUCCESS, 'Header', 'Body');

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Header!');
    expect(compiled.querySelector('p').textContent).toContain('Body');
  }));
});
