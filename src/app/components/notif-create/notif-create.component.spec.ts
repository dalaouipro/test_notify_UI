import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifCreateComponent } from './notif-create.component';

describe('NotifCreateComponent', () => {
  let component: NotifCreateComponent;
  let fixture: ComponentFixture<NotifCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
