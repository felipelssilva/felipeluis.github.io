import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentPage } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponentPage;
  let fixture: ComponentFixture<ContactComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponentPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
