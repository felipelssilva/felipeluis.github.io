import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponentPage } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponentPage;
  let fixture: ComponentFixture<AboutMeComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeComponentPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
