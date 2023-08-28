import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSingleComponent } from './character-single.component';

describe('CharacterSingleComponent', () => {
  let component: CharacterSingleComponent;
  let fixture: ComponentFixture<CharacterSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
