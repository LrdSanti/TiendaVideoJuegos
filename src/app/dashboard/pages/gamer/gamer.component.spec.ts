import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerComponent } from './gamer.component';

describe('GamerComponent', () => {
  let component: GamerComponent;
  let fixture: ComponentFixture<GamerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamerComponent]
    });
    fixture = TestBed.createComponent(GamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
