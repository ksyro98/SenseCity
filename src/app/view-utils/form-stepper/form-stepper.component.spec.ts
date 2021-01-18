import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormStepperComponent } from './form-stepper.component';

describe('FormStepperComponent', () => {
  let component: FormStepperComponent;
  let fixture: ComponentFixture<FormStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStepperComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
