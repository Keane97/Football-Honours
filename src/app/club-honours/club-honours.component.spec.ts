import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubHonoursComponent } from './club-honours.component';

describe('ClubHonoursComponent', () => {
  let component: ClubHonoursComponent;
  let fixture: ComponentFixture<ClubHonoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubHonoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubHonoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
