import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorHandleComponent } from './error-handle.component';

describe('ErrorHandleComponent', () => {
  let component: ErrorHandleComponent;
  let fixture: ComponentFixture<ErrorHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandleComponent ],
      imports:[HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
