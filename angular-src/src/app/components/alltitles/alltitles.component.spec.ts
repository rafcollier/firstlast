import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltitlesComponent } from './alltitles.component';

describe('AlltitlesComponent', () => {
  let component: AlltitlesComponent;
  let fixture: ComponentFixture<AlltitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
