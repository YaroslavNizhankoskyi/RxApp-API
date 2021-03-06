/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrugComponent } from './drug.component';

describe('DrugComponent', () => {
  let component: DrugComponent;
  let fixture: ComponentFixture<DrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
