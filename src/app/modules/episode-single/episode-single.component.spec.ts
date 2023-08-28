import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeSingleComponent } from './episode-single.component';

describe('EpisodeSingleComponent', () => {
  let component: EpisodeSingleComponent;
  let fixture: ComponentFixture<EpisodeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
