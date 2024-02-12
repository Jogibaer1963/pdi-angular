import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashbayComponent } from './washbay.component';

describe('WashbayComponent', () => {
  let component: WashbayComponent;
  let fixture: ComponentFixture<WashbayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WashbayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashbayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
