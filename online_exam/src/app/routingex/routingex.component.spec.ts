import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingexComponent } from './routingex.component';

describe('RoutingexComponent', () => {
  let component: RoutingexComponent;
  let fixture: ComponentFixture<RoutingexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
