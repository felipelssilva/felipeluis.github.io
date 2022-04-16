import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentPage } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponentPage;
  let fixture: ComponentFixture<HomeComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponentPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
