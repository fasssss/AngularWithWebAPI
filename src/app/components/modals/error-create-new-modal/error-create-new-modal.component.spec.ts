import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCreateNewModalComponent } from './error-create-new-modal.component';

describe('ErrorCreateNewModalComponent', () => {
  let component: ErrorCreateNewModalComponent;
  let fixture: ComponentFixture<ErrorCreateNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCreateNewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCreateNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
