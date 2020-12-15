import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInfoTabComponent } from './work-info-tab.component';

describe('WorkInfoTabComponent', () => {
  let component: WorkInfoTabComponent;
  let fixture: ComponentFixture<WorkInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkInfoTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
