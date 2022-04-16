import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediasComponentPage } from './social-medias.component';

describe('SocialMediasComponent', () => {
  let component: SocialMediasComponentPage;
  let fixture: ComponentFixture<SocialMediasComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediasComponentPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediasComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
