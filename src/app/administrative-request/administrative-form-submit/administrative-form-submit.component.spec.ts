import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrativeFormSubmitComponent } from './administrative-form-submit.component';

describe('AdministrativeFormSubmitComponent', () => {
  let component: AdministrativeFormSubmitComponent;
  let fixture: ComponentFixture<AdministrativeFormSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeFormSubmitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativeFormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
