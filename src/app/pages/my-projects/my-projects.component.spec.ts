import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsComponentPage } from './my-projects.component';

describe('MyProjectsComponent', () => {
  let component: MyProjectsComponentPage;
  let fixture: ComponentFixture<MyProjectsComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProjectsComponentPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
