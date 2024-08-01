import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties correctly', () => {
    component.ngOnInit();

    expect(component.data).toBeDefined();
    expect(component.data.labels).toEqual([
      'Contribuição mensal',
      'Contribuição voluntária',
    ]);
    expect(component.data.datasets.length).toBe(1);

    expect(component.options).toBeDefined();
    expect(component.options.responsive).toBeTrue();
    expect(component.options.maintainAspectRatio).toBeFalse();
    expect(component.options.plugins).toEqual({
      legend: {
        display: false,
      },
    });

    expect(component.legendData).toBeDefined();
    expect(component.legendData.length).toBe(2);
  });
});
