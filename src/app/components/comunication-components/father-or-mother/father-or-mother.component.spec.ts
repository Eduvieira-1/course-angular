import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherOrMotherComponent } from './father-or-mother.component';

describe('FatherOrMotherComponent', () => {
  let component: FatherOrMotherComponent;
  let fixture: ComponentFixture<FatherOrMotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherOrMotherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FatherOrMotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
