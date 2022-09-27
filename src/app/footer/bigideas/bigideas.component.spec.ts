import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigideasComponent } from './bigideas.component';

describe('BigideasComponent', () => {
  let component: BigideasComponent;
  let fixture: ComponentFixture<BigideasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigideasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
