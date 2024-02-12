import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdiMachineComponent } from './pdi-machine.component';

describe('PdiMachineComponent', () => {
  let component: PdiMachineComponent;
  let fixture: ComponentFixture<PdiMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdiMachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdiMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
