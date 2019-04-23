import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blank404Component } from './blank404.component';

describe('Blank404Component', () => {
  let component: Blank404Component;
  let fixture: ComponentFixture<Blank404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blank404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blank404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
