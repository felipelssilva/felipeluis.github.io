import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsSideComponent } from './blogs-side.component';

describe('BlogsSideComponent', () => {
  let component: BlogsSideComponent;
  let fixture: ComponentFixture<BlogsSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
