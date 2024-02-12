import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippMachineComponent } from './shipp-machine.component';

describe('ShippMachineComponent', () => {
  let component: ShippMachineComponent;
  let fixture: ComponentFixture<ShippMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippMachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
