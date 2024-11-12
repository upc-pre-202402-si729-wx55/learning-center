import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationSectionComponent } from './authentication-section.component';

describe('AuthenticationSectionComponent', () => {
  let component: AuthenticationSectionComponent;
  let fixture: ComponentFixture<AuthenticationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
