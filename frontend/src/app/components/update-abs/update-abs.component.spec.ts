import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAbsComponent } from './update-abs.component';

describe('UpdateAbsComponent', () => {
  let component: UpdateAbsComponent;
  let fixture: ComponentFixture<UpdateAbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
