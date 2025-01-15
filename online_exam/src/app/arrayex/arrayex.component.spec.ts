import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayexComponent } from './arrayex.component';

describe('ArrayexComponent', () => {
  let component: ArrayexComponent;
  let fixture: ComponentFixture<ArrayexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
