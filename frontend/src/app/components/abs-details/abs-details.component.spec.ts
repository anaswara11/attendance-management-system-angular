import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsDetailsComponent } from './abs-details.component';

describe('AbsDetailsComponent', () => {
  let component: AbsDetailsComponent;
  let fixture: ComponentFixture<AbsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
