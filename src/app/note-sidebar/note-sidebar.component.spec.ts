import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSidebarComponent } from './note-sidebar.component';

describe('NoteSidebarComponent', () => {
  let component: NoteSidebarComponent;
  let fixture: ComponentFixture<NoteSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
