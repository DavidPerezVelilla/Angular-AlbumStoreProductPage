import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductListComponent } from './poduct-list.component';

describe('PoductListComponent', () => {
  let component: PoductListComponent;
  let fixture: ComponentFixture<PoductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
