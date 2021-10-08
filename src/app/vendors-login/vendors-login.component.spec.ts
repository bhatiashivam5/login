import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsLoginComponent } from './vendors-login.component';

describe('VendorsLoginComponent', () => {
  let component: VendorsLoginComponent;
  let fixture: ComponentFixture<VendorsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
