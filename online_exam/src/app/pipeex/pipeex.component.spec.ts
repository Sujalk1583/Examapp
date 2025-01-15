import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeexComponent } from './pipeex.component';

describe('PipeexComponent', () => {
  let component: PipeexComponent;
  let fixture: ComponentFixture<PipeexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
