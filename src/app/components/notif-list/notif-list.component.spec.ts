import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifListComponent } from './notif-list.component';

describe('NotifListComponent', () => {
  let component: NotifListComponent;
  let fixture: ComponentFixture<NotifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
