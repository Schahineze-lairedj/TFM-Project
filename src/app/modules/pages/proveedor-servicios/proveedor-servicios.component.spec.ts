import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorServiciosComponent } from './proveedor-servicios.component';

describe('ProveedorServiciosComponent', () => {
  let component: ProveedorServiciosComponent;
  let fixture: ComponentFixture<ProveedorServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
