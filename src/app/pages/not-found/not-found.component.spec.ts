import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponentPage } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponentPage;
  let fixture: ComponentFixture<NotFoundComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponentPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
