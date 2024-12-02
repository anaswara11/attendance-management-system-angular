import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheToServiceComponent } from './add-tache-to-service.component';

describe('AddTacheToServiceComponent', () => {
  let component: AddTacheToServiceComponent;
  let fixture: ComponentFixture<AddTacheToServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTacheToServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheToServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
