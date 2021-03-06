import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCreatorComponent } from './hero-creator.component';

describe('HeroEditorComponent', () => {
  let component: HeroCreatorComponent;
  let fixture: ComponentFixture<HeroCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
